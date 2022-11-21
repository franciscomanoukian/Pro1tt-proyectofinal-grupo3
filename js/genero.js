let urlGenerosPeliculas = 'https://api.themoviedb.org/3/genre/movie/list?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US'
let urlGenerosSeries = 'https://api.themoviedb.org/3/genre/tv/list?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US'

// Fetch y agregamos Generos de peliculas ///////////////////////////////////////////////////////
fetch(urlGenerosPeliculas).then(function (response) {
    return response.json()
// Captura la información. Hace un callback. Response convierte de JSON a otro tipo de dato///////////////////////////////////////////////////////
}).then(function (data) {
    
    let listaDeGeneros = data.genres
    console.log(listaDeGeneros)
    let generosPeliculas = document.querySelector('#generospeliculas')
    let generosPelis = ''
// Iniciamos un contador en 0, y mientras sea menor a la longitud del array, le agregamos a generosPelis las clases///////////////////////////////////////////////////////
    for (let i = 0; i < 4; i++) {
        generosPelis += `<li class="liDeLista"><a href="./detalle_genero.html?id_genero_pelis=${listaDeGeneros[i].id}" class="linkadetalleGenero">${listaDeGeneros[i].name}</a></li>`
    
    }
// Metemos los cambios de generosPelis a generosPeliculas.innerHTML///////////////////////////////////////////////////////
    generosPeliculas.innerHTML = generosPelis

// Atrapa si la promesa tuvo algun error y lo imprime///////////////////////////////////////////////////////
}).catch(function (error) {
    console.log('el error es' + error);
})

// ///////////////////////////////////////////////////////
fetch(urlGenerosSeries).then(function (response) {
    return response.json()
// ///////////////////////////////////////////////////////
}).then(function (data) {
    
    let listaDeGenerosSeries = data.genres
    console.log(listaDeGenerosSeries)
    let generosSeries = document.querySelector('#generosseries')
    let generosdeSeries = ''
// ///////////////////////////////////////////////////////
    for (let i = 0; i < 4; i++) {
        generosdeSeries += `<li class="liDeLista"><a href="./detalle_genero.html?id_genero_series=${listaDeGenerosSeries[i].id}" class="linkadetalleGenero">${listaDeGenerosSeries[i].name}</a></li>`
    
    }
// ///////////////////////////////////////////////////////
    generosSeries.innerHTML = generosdeSeries

// ///////////////////////////////////////////////////////
}).catch(function (error) {
    console.log('el error es' + error);
})

