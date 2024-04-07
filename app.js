const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 80; 
const db = require('./static/models/database.js');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('static'));
app.set('view engine', 'ejs');



app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await db.users.findOne({ where: { email, password } });
  
    if (user) {
      res.redirect('/admin');
    } else {
      res.send('Failed to authenticate');
    }
  });


  app.get('/', async (req, res) => {
    try {
      // Récupération des données de la base de données
      const info = await db.info.findAll();
      const experience = await db.experience.findAll();
      const expertise = await db.expertise.findAll();
      const interest = await db.interest.findAll();
      const certificates = await db.certificates.findAll();
      const skills = await db.skills.findAll();
      const education = await db.education.findAll();
  
      // Rendu de la page en utilisant les données récupérées
      res.render('index.ejs', { info, experience, expertise, interest, skills, certificates, education});
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    }
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


/*
Création de la base de donnée initiale

const cheerio = require('cheerio');
const fs = require('fs');

// read the HTML file
const htmlContent = fs.readFileSync(path.join(__dirname, 'templates', 'index.html'), 'utf8');

// use cheerio to load the HTML and parse it
const $ = cheerio.load(htmlContent);

// Table info (db.info)
const position = $('.position').text();
const disponibilite = $('.disponibilite').text();
const synopsis = $('.synopsis').text();
const email = $('.email').text().trim();
const number = $('.number').text();
const website = $('a.website').attr('href');

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
const interestData = []
$('li.interet').each((i, elem) => {
  const interest_name = $(elem).text().trim();
  interestData.push({interest_name});
});

// Table skills (db.skills)
const skillsData = [];
$('.skill-name').each((i, skillNameElement) => {
  const skills_name = $(skillNameElement).text().trim().replace(':', '');
  // Comptez les étoiles "checked" pour la compétence actuelle
  let skill_level = 0;
  $(skillNameElement).nextUntil('h3').each((j, starElement) => {
    if ($(starElement).hasClass('fa-star') && $(starElement).hasClass('checked')) {
      skill_level++;
    }
  });

  skillsData.push({skills_name, skill_level});
});

// Table certificates (db.certificates)
const certificatesData = [];
$('.certif').each((i, elem) => {
  const certificates_title = $(elem).find('.certificates-title').text().trim();
  const certificates_description = $(elem).find('.certificates-desc').text().trim();

  certificatesData.push({certificates_title , certificates_description});
});

async function storeCVData() {
  try {
    // ajout des infos
    await db.info.create({ position, disponibilite, synopsis, email, number, website });

    // ajout des experiences
    for (const data of experienceData) {
      await db.experience.create(data);
    }

    // ajout des expertises
    for (const data of expertiseData) {
      await db.expertise.create(data);
    }
    
    // ajout des interest
    for (const data of interestData) {
      await db.interest.create(data);
    }

    // ajout des skills
    for (const skill of skillsData) {
      await db.skills.create(skill);
    }

    // ajout des certificates
    for (const certificate of certificatesData) {
      await db.certificates.create(certificate);
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

async function insertEducationData() {
  try {
    // Entry 1
    await db.education.create({
      education_title: 'Esiroi / 2021 - Current',
      education_description: 'First year engineering student specializing in IT'
    });

    // Entry 2
    await db.education.create({
      education_title: 'Lycée Lislet Geoffroy / 2017-2020',
      education_description: 'BAC-S in engineering science with ISN option (computer science, digital science)'
    });

    console.log('Education data inserted successfully.');
  } catch (error) {
    console.error('Error inserting education data:', error);
  }
}

/*
async function insertinfo() {
  try {
    await db.info.create({
      email: 'raphael.soupayavalliama@gmail.com',
      number: '0693879048',
      website: 'https://esiroi.univ-reunion.fr'
    });
    
    console.log("info data added");
  } catch (error) {
    console.error("Error adding data:",  error);
  }
}
*/

/*
addUser("raphael.soupayavalliama@gmail.com", "bougfaible974");
addUser("andy.martel@univ-reunion.fr", "imzeboss974");
storeCVData();
insertEducationData();*/

//insertinfo();