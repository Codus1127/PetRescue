require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env
const authCtrl = require('./controllers/authController')
const petCtrl = require('./controllers/petController')

const app = express()

app.use(express.json())
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SESSION_SECRET
}))

app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.delete('/auth/logout', authCtrl.logout)

app.get('/api/pets', petCtrl.getPets)
app.get('/api/pets/:petid', petCtrl.getOnePet)
app.post('/api/pets', petCtrl.addPet)
app.delete('/api/pets/:pet_id', petCtrl.deletePet)

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} ducks marching on Rome.`))
})