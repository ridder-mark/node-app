
//include libraries
const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

//initialize port
const port = process.env.PORT || 3000;

// class variable
var app = express();

//initialize partials
hbs.registerPartials(__dirname + '/views/partials');

// initialize web renderer
app.set('view engine', 'hbs');

// setup serving static
app.use(express.static(__dirname + '/public'));

// hbs helpers
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
})

// page renders
app.get('/', (req, res) => {
    res.render('page.hbs', {
        pageTitle: 'Home Page',
        pageContent: 'This is the homepage'
    })
})

app.get('/project', (req, res) => {
    res.render('page.hbs', {
        pageTitle: 'Project Page',
        pageContent: 'This is a project page',
    })
})

app.get('/about', (req, res) => {
    res.render('page.hbs', {
        pageTitle: 'About Page',
        pageContent: 'This is the about page',
    })
})

//port status report
app.listen(port, () => {
    console.log(`server is up on port ${port}`);
});
