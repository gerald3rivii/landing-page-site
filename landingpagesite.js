const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000

app.engine('handlebars', expressHandlebars.engine())
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))
app.get('/', (req, res) => res.render('index'))

app.listen(port, () => console.log(
    `Express runs on http://localhost:${port}` +
    'press Ctrl+C for exit'
))