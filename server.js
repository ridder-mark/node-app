
//include libraries

const express = require('express');
var app = express();

const hbs = require('hbs');
const fs = require('fs');

//initialize port
const port = process.env.PORT || 3000;

// initialize web renderer
app.set('view engine', 'hbs');

// server logs
app.use((req, res, next) => {

    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);

    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('unable to append server logfile');
        }
    })
    next();

});




//port status report
app.listen(port, () => {
    console.log(`server is up on port ${port}`);
});
