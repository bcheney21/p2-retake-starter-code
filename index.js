// Required modules and variables
const express = require('express')
const app = express()
const db = require('./models')
const morgan = require('morgan')

// Middleware and config
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'))

// Routes
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/favorites', (req, res) => {
    db.animal.findAll() 
    .then(function(animals) {
    
        res.render('favorites', { animals:animals })
    })
})

app.post('/favorites', (req, res) => {
        db.animal.findOrCreate({
            where: { 
            species_name: req.body.species_name,
            scientific_name: req.body.scientific_name,	
            image_url: req.body.image_url,
            description: req.body.description,
            extinct:req.body.extinct
            }
        // console.log(created)
    }).then(function(animal) {
        console.log(animal)
        res.redirect('/favorites')
    }).catch(function(err) {
        console.log(err)
    })
})


app.get('/favorites/new', (req, res) => {
    res.render('new')
})

app.listen(process.env.PORT || 3000)