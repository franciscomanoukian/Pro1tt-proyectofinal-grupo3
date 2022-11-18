let qs = location.search;
let qsObjLit = new URLSearchParams(qs);

let idPeli = qsObjLit.get('id')

let urlDetalle = `https://api.themoviedb.org/3/movie/${idPeli}?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US`
let urlWatchProviders = `https://api.themoviedb.org/3/movie/${idPeli}/watch/providers?api_key=81faef6942a31915ed87b416fbba64ba`
let urlGetRecommendations = `https://api.themoviedb.org/3/movie/${idPeli}/recommendations?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US&page=1`

// Traigo datos de la película y los aplico al DOM
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
    listaGeneros = 'AGREGARLE QUERYSTRINGS'
    generosTodos = data.genres
    for (let i = 0; i < generosTodos.length; i++) {
       listaGeneros+=`<a href="./detalle_genero.html?genre_id="${generosTodos[i].id}" class="link_botones_generos" id="${generosTodos[i].id}">${generosTodos[i].name}</a> `
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

// Traigo datos de dónde ver la película y los aplico al DOM
fetch(urlWatchProviders).then(function (response) {
    return response.json()
}).then(function (data) {
    //Acá ya tenemmos los datos finales y es donde debemos escribir nuestro código.
    let objLitProviders = data.results
    console.log(objLitProviders);

    //1 Capturo el elemento html en donde quiero hacer una modificación
    let watchProviders = document.querySelector('#watchProviders')

    let nombreProvider = ''
    //Con toda la estructura html completa ahora la paso al DOM
    
    for (let i = 0; i < objLitProviders.length; i++) {
        nombreProvider += objLitProviders[i].provider_name
        
    }

    watchProviders.innerHTML = `AGREGAR LOGOS Y LINK Dónde ver: ${nombreProvider}`
    
}).catch(function (error) {
    console.log(error);
})

// Traigo datos de películas similares recomendadas y las aplico al DOM
fetch(urlGetRecommendations).then(function (response) {
    return response.json()
}).then(function (data) {
    //Acá ya tenemmos los datos finales y es donde debemos escribir nuestro código.
    let arrayRecomendadas = data.results
    console.log(data.results);

    //1 Capturo el elemento html en donde quiero hacer una modificación
    // let watchProviders = document.querySelector('#watchProviders')
    let verRecomendaciones = document.querySelector('#verRecomendaciones');
    let recomendadas = ''

    //2 Recorro la información de la api y la organizo para mostarla en el html
    for(let i=0; i<5; i++){
        //Dentro del for voy acumulando en la variable una estructura html por cada personaje del array.
        recomendadas += `<article class="peliOSerie">
                                <p class="nombrePeliOSerie">${arrayRecomendadas[i].title}</p>
                                <img src='https://image.tmdb.org/t/p/w500/${arrayRecomendadas[i].poster_path}'  alt="Titanic" class="tapapelicula">
                                <a href="./detalle_peliculas.html?id=${arrayRecomendadas[i].id}" class="linkadetalle">Ver más</a>
                            </article>`
    }
    //Con toda la estructura html completa ahora la paso al DOM
    verRecomendaciones.innerHTML = recomendadas;
    
}).catch(function (error) {
    console.log(error);
})

let h3 = document.querySelector('h3')
let botonRecomendaciones = document.querySelector('#botonVerRecomendaciones')
let recomendacionesHidden = true

if (recomendacionesHidden) {
    botonRecomendaciones.innerText = 'Ver Recomendadas'
    h3.style.display = 'none'
    verRecomendaciones.style.display = 'none'
}

botonRecomendaciones.addEventListener('click', function (e) {
    if (recomendacionesHidden) {
        botonRecomendaciones.innerText = 'Ver Recomendadas'
        h3.style.display = 'none'
        verRecomendaciones.style.display = 'none'
        recomendacionesHidden = false
    } else {
        botonRecomendaciones.innerText = 'Ocultar Recomendadas'
        h3.style.display = 'flex'
        verRecomendaciones.style.display = 'flex'
        recomendacionesHidden = true
    }
})

// Esconder seccion ver recomendaciones
