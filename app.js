const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 80; 
const db = require('./static/models/index.js');
const path = require('path');
const cheerio = require('cheerio');
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('static'));

// read the HTML file
const htmlContent = fs.readFileSync(path.join(__dirname, 'templates', 'index.html'), 'utf8');

// use cheerio to load the HTML and parse it
const $ = cheerio.load(htmlContent);

// Table info (db.info)
const name = $('.name').text();
const position = $('.position').text();
const disponibilite = $('.disponibilite').text();
const synopsis = $('.synopsis').text();

// Table experience (db.experience)
const experienceData = [];
$('.XP').each((i, elem) => {
  const title = $(elem).find('h3').text().trim();
  const location = $(elem).find('h4').text().trim();
  const description = $(elem).find('p').text().trim();

  experienceData.push({ title, location, description });
});

// Table expertise (db.expertise)
const expertiseData = [];
$('li.expertise').each((i, elem) => {
  const expertise_name = $(elem).text().trim();
  expertiseData.push({expertise_name});
});

// Table interest (db.interest)

// Table skills (db.skills)

// Table certificates (db.certificates)

async function storeCVData() {
  try {
    // ajoute des infos
    await db.info.create({ name, position, disponibilite, synopsis });

    // ajoute des experiences
    for (const data of experienceData) {
      await db.experience.create(data);
    }

    // ajoute des expertises
    for (const data of expertiseData) {
      await db.expertise.create(data);
    }

    // ... do the same for the other parts of the CV
    console.log("Data stored successfully");
  } catch (error) {
    console.error("Error storing CV data:", error);
  }
}



async function addUser(email, password) {
  try {
    const newUser = await db.users.create({
      email,
      password
      
    });
    console.log("User added successfully:", newUser.get({ plain: true }));
  } catch (error) {
    console.error("Error adding user:", error);
  }
}

//addUser("raphael.soupayavalliama@gmail.com", "bougfaible974");
//addUser("andy.martel@univ-reunion.fr", "imzeboss974");
//storeCVData();



app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await db.users.findOne({ where: { email, password } });
  
    if (user) {
      res.redirect('/admin');
    } else {
      res.send('Failed to authenticate');
    }
  });


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'index.html'));
  });


app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'login.html'))
})


app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates', 'admin.html'))
})

db.sequelize.sync().then(() => {
  app.listen(80, () => console.log('Server running on port 80'));
});