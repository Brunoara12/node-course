const express = require('express')
const path = require('path')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

const viewsPath = path.join(__dirname, '../templates')

app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Bruno Rebaza'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Bruno Rebaza'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'This is a help Message'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: '50 Degrees',
        location: 'Palm Springs'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})