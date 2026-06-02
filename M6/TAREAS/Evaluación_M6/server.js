const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const { leerMascotas, guardarMascotas, generarId } = require('./mascotas')

const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// Configuración Handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))



// Raíz → redirige a la vista de mascotas
app.get('/', (req, res) => {
  res.redirect('/mascotas')
})

// API JSON (para Axios)
app.get('/api/mascotas', (req, res) => {
  const mascotas = leerMascotas()
  res.json(mascotas)
})

// Vista Handlebars
app.get('/mascotas', (req, res) => {
  const mascotas = leerMascotas();
  res.render('mascotas', { mascotas })
})

// Agregar mascota
app.post('/mascotas', (req, res) => {
  try {
    const { nombre, rut } = req.body;
    if (!nombre || !rut) throw new Error('Debe ingresar nombre y rut')

    const mascotas = leerMascotas()
    const id = generarId(mascotas)

    const nuevaMascota = { id, nombre, rut }
    mascotas.push(nuevaMascota)
    guardarMascotas(mascotas)

    res.redirect('/mascotas')
  } catch (err) {
    res.status(400).send(`Error: ${err.message}`)
  }
})

// Eliminar mascota
app.post('/mascotas/eliminar', (req, res) => {
  try {
    const { id } = req.body;
    let mascotas = leerMascotas()
    mascotas = mascotas.filter(m => m.id != id)
    guardarMascotas(mascotas)
    res.redirect('/mascotas')
  } catch (err) {
    res.status(400).send(`Error: ${err.message}`)
  }
})


app.listen(3000, () => console.log('Servidor en http://localhost:3000'))
