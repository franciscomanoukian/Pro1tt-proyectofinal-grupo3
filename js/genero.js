let urlGenerosPeliculas = 'https://api.themoviedb.org/3/genre/movie/list?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US'
let urlGenerosSeries = 'https://api.themoviedb.org/3/genre/movie/list?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US'


// let peliculasaccion = document.querySelector()
// let peliculasdocumentales = document.querySelector()
// let peliculasficcion = document.querySelector()
// let peliculasdrama = document.querySelector()

// let seriesfantasticas = document.querySelector()
// let seriesanimadas = document.querySelector()
// let seriesficcion = document.querySelector()
// let seriessuspenso = document.querySelector()


// Fetch y agregamos PELICULAS DE ACCION ///////////////////////////////////////////////////////
fetch(urlGenerosPeliculas).then(function (response) {
    return response.json()
    
}).then(function (data) {
    
    let listaDeGeneros = data.genres
    console.log(listaDeGeneros)
    let generosPeliculas = document.querySelector('#generospeliculas')
    let generosPelis = ''
    for (let i = 0; i < 4; i++) {
        generosPelis += `<li class="liDeLista"><a href="./detalle_genero.html?id_genero=${listaDeGeneros[i].id}" class="linkadetalleGenero">${listaDeGeneros[i].name}</a></li>`
    
    }
    generosPeliculas.innerHTML = generosPelis


}).catch(function (error) {
    console.log('el error es' + error);
})