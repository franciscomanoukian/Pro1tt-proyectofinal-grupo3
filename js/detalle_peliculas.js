let qs = location.search;
let qsObjLit = new URLSearchParams(qs);

let idPeli = qsObjLit.get('id')

let urlDetalle = `https://api.themoviedb.org/3/movie/${idPeli}?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US`
let urlWatchProviders = `https://api.themoviedb.org/3/movie/${idPeli}/watch/providers?api_key=81faef6942a31915ed87b416fbba64ba`

fetch(urlDetalle).then(function (response) {
    return response.json()
}).then(function (data) {
    //Acá ya tenemmos los datos finales y es donde debemos escribir nuestro código.
    console.log(data);

    //1 Capturo el elemento html en donde quiero hacer una modificación
    let titulo = document.querySelector('.titulo');
    let anioRating = document.querySelector('#año_y_rating');
    let fotoPortada = document.querySelector('#foto_portada');
    let duracion = document.querySelector('#duracion')
    let sinopsis = document.querySelector('#sinopsis')
    let generos = document.querySelector('#generos_pelicula')

    // Preparo estructura
    listaGeneros = 'AGREGARLE LINKS'
    generosTodos = data.genres
    for (let i = 0; i < generosTodos.length; i++) {
       listaGeneros+=`<a href="./detalle_genero.html" class="link_botones_generos" id="${generosTodos[i].id}">${generosTodos[i].name}</a> `
    }

    //Con toda la estructura html completa ahora la paso al DOM
    titulo.innerText = `${data.title}`;
    anioRating.innerText = `${data.release_date} - ⭐ ${data.vote_average}`
    fotoPortada.innerHTML = ` <img src='https://image.tmdb.org/t/p/w500/${data.poster_path}'  alt="${data.title}" class="poster">` 
    duracion.innerText = `${data.runtime} minutos`
    sinopsis.innerText = `${data.overview}`
    generos.innerHTML = `${listaGeneros}`
    
}).catch(function (error) {
    console.log(error);
})

fetch(urlWatchProviders).then(function (response) {
    return response.json()
}).then(function (data) {
    //Acá ya tenemmos los datos finales y es donde debemos escribir nuestro código.
    let objLitProviders = data.results.AR.flatrate
    console.log(objLitProviders);

    //1 Capturo el elemento html en donde quiero hacer una modificación
    let watchProviders = document.querySelector('#watchProviders')

    let nombreProvider = ''
    //Con toda la estructura html completa ahora la paso al DOM
    
    for (let i = 0; i < objLitProviders.length; i++) {
        nombreProvider += objLitProviders[i].provider_name
        
    }

    watchProviders.innerText = `AGREGAR LOGOS Y LINK Dónde ver: ${nombreProvider}`
    
}).catch(function (error) {
    console.log(error);
})