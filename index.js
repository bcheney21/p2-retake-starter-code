// required modules and variables
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const rowdy = require('rowdy-logger')
const axios = require('axios')
const morgan = require('morgan')
const db = require('./models')

const app = express()
const rowdyResults = rowdy.begin(app)
const PORT = process.env.PORT || 3000

// middleware and config
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

//controllers 

// routes
app.get('/', (req, res) => {
    res.render('layout')
})

app.listen(PORT, () => {
    rowdyResults.print()
})