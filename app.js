const path = require('path')
const express = require('express')
const port = process.env.PORT||3000;
const moment = require('moment')
const favicon = require('serve-favicon');

//init app
const app=express()

//init local-moment
app.locals.moment = moment;

//loading favicon 
app.use(favicon(path.join(__dirname, 'public', 'world-news.ico')))

//static file   
app.use(express.static(path.join(__dirname, 'public')))

//set view-engine(EJS)
app.set('view engine','.ejs')
app.set('views','./views')

app.use(express.urlencoded({ extended: true }));

//load routes
app.use('/',require('./routes/news'))

app.listen(port,()=> {
    console.log(`Server is running on http://localhost:${port}`)
})


/* for deployment, use below code in package.json file
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     "scripts": {
         "start": "node app.js"

* for local
~~~~~~~~~~~~~~~~~~~~~
    "start": "node app.js",
    "dev": "nodemon app.js"

*/