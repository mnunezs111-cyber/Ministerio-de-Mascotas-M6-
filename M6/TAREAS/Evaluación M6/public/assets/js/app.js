function listarMascotas() {
  axios.get('/api/mascotas')   
    .then(res => {
      const data = res.data
      let html = '<ul>'
      data.forEach(m => {
        html += `<li>ID: ${m.id} - Nombre: ${m.nombre} - RUT: ${m.rut}</li>`
      })
      html += '</ul>'
      document.getElementById('resultado').innerHTML = html
    })
    .catch(err => {
      if (err.response) {
        alert('Error: ' + err.response.data.error)
      } else {
        alert('Error de conexión con el servidor')
      }
      console.error(err)
    })
}

