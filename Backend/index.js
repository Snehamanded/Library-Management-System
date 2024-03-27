const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const exphbs = require('express-handlebars');

const app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '', 
  database: 'project'
});

// Connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the project database.');
});

app.post('/register', (req, res) => {
  const { name, usn, branch, semister, phone_number, email, password } = req.body;

  // Insert the student data into the student table
  const query = `INSERT INTO student (name, usn, branch, semister, phone_number, email, password) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  db.query(query, [name, usn, branch, semister, phone_number, email, password], (err, result) => {
    if (err) throw err;
    res.redirect('/');
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000.');
});