const fs = require('fs')

const leerMascotas = () => {
  try {
    const data = fs.readFileSync('mascotas.json')
    return JSON.parse(data)
  } catch (err) {
    console.error('Error leyendo archivo:', err.message)
    return []
  }
}

const guardarMascotas = (mascotas) => {
  fs.writeFileSync('mascotas.json', JSON.stringify(mascotas, null, 2))
}

const generarId = (mascotas) => {
  if (mascotas.length === 0) return 1
  const ids = mascotas.map(m => m.id || 0)
  return Math.max(...ids) + 1
}

module.exports = { leerMascotas, guardarMascotas, generarId }
