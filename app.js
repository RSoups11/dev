const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 80; 
const db = require('./static/models/index.js');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('static'));


app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(`Logging in with: ${email} ${password}`);
    const user = await db.users.findOne({ where: { email, password } });
  
    if (user) {
      res.redirect('/');
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

db.sequelize.sync().then(() => {
  app.listen(80, () => console.log('Server running on port 80'));
});