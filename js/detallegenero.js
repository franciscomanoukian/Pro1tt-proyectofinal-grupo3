

let peliculasaccion = document.querySelector()
let peliculasdocumentales = document.querySelector()
let peliculasficcion = document.querySelector()
let peliculasdrama = document.querySelector()

let seriesfantasticas = document.querySelector()
let seriesanimadas = document.querySelector()
let seriesficcion = document.querySelector()
let seriessuspenso = document.querySelector()


// Fetch y agregamos PELICULAS DE ACCION ///////////////////////////////////////////////////////
fetch(peliculasaccion).then(function (response) {
    return response.json
    
}).then(function (data) {
    console.log(data)
}).catch(function (error) {
    console.log('el error es' + error);
})