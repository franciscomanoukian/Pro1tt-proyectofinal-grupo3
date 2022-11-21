let qs = location.search;
let qsObjLit = new URLSearchParams(qs);

let idSerie = qsObjLit.get('id')
console.log(idSerie);

let urlDetalle = `https://api.themoviedb.org/3/tv/${idSerie}?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US`
let urlWatchProviders = `https://api.themoviedb.org/3/tv/${idSerie}/watch/providers?api_key=81faef6942a31915ed87b416fbba64ba`
let urlGetRecommendations = `https://api.themoviedb.org/3/tv/${idSerie}/recommendations?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US&page=1`
let urlGetVideos = `https://api.themoviedb.org/3/tv/${idSerie}/videos?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US`
let urlGetReviews = `https://api.themoviedb.org/3/tv/${idSerie}/reviews?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US&page=1`


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
    let botonFavoritosSeries = document.querySelector('#botonFavoritosSeries')

    // Preparo estructura
    listaGeneros = ''
    generosTodos = data.genres
    for (let i = 0; i < generosTodos.length; i++) {
       listaGeneros+=`<a href="./detalle_genero.html?id_genero=${generosTodos[i].id}" class="link_botones_generos" id="${generosTodos[i].id}">${generosTodos[i].name}</a> `
    }

    //Con toda la estructura html completa ahora la paso al DOM
    titulo.innerText = `${data.name}`;
    anioRating.innerText = `${data.first_air_date} - ⭐ ${data.vote_average}`
    fotoPortada.innerHTML = ` <img src='https://image.tmdb.org/t/p/w500/${data.poster_path}'  alt="${data.title}" class="poster">` 
    duracion.innerText = `${data.number_of_seasons} temporadas`
    sinopsis.innerText = `${data.overview}`
    generos.innerHTML = `${listaGeneros}`
    
}).catch(function (error) {
    console.log(error);
})

// Traigo videos y los aplico al DOM
fetch(urlGetVideos).then(function (response) {
    return response.json()
}).then(function (data) {
    let arrayVideos = data.results;
    
    console.log(data.results);
    

    // //1 Capturo el elemento html en donde quiero hacer una modificación
    let videoRecomendado = document.querySelector('#videoRecomendado')
    let linkAVideo = document.querySelector('#linkAVideo')

 
    // //Con toda la estructura html completa ahora la paso al DOM
    
        for (let i = 0; i < arrayVideos.length; i++) {
            let nombre = arrayVideos[i].name
            if (nombre.indexOf('Trailer') != -1 || nombre.indexOf('trailer') != -1) { // Buscamos un video que contenga la palabra 'trailer' en el array de videos recomendados
                let objLitVideo = arrayVideos[i]
                videoRecomendado.innerHTML = `Trailer: ${objLitVideo.name}`
                linkAVideo.innerHTML = `<a href="https://www.youtube.com/watch?v=${objLitVideo.key}" class="link_botones_generos">Ver en YouTube</a>`
                break
            } else {
                videoRecomendado.innerText = `No hay trailers disponibles. Video Recomendado: ${arrayVideos[0].name}`
                linkAVideo.innerHTML = `<a href="https://www.youtube.com/watch?v=${arrayVideos[0].key}" class="link_botones_generos">Ver en YouTube</a>`
            }

        }              

    // watchProviders.innerHTML = `AGREGAR LOGOS Y LINK Dónde ver: ${nombreProvider}`
    
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

 
    //Con toda la estructura html completa ahora la paso al DOM
    
    if (objLitProviders.MX != undefined) {
        let prove = objLitProviders.MX.buy[0];
        watchProviders.innerHTML = `<p class="prove">Dónde ver: ${prove.provider_name}</p>
                                    <img class="proveImg" src="https://image.tmdb.org/t/p/w500/${prove.logo_path}">`
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
                                <p class="nombrePeliOSerie">${arrayRecomendadas[i].name}</p>
                                <img src='https://image.tmdb.org/t/p/w500/${arrayRecomendadas[i].poster_path}'  alt="img" class="tapapelicula">
                                <a href="./detalle_series.html?id=${arrayRecomendadas[i].id}" class="linkadetalle">Ver más</a>
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

// Traigo reviews y los aplico al DOM
fetch(urlGetReviews).then(function (response) {
    return response.json()
}).then(function (data) {
    //Acá ya tenemmos los datos finales y es donde debemos escribir nuestro código.
    let arrayReviews = data.results
    console.log(arrayReviews);

    //1 Capturo el elemento html en donde quiero hacer una modificación
    let reviews = document.querySelector('.reviews')
    let reseñas = ``

    if (arrayReviews.length <= 3 || arrayReviews == undefined) {
        for (let i = 0; i < arrayReviews.length; i++) {
            reseñas += `<article class="descripcion_abajo">- ${arrayReviews[i].author}:<br> ${arrayReviews[i].content}</article>`;
            
        }
    } else {
        for (let i = 0; i < 3; i++) {
            reseñas += `<article class="descripcion_abajo">- ${arrayReviews[i].author}:<br> ${arrayReviews[i].content}</article>`;
        }
    }
    //Con toda la estructura html completa ahora la paso al DOM
    reviews.innerHTML = reseñas


}).catch(function (error) {
    console.log(error);
})

/* Array que se rellena en favoritos */
let favoritosSeries = [];

/* recuperamos el storage */
let recuperoStorage = localStorage.getItem('favoritosSeries');

if(recuperoStorage != null){
    favoritosSeries = JSON.parse(recuperoStorage);
};

/* Validar si este id existe en el favoritos (localsStorage) */
if (favoritosSeries.includes(idSerie)) {
    botonFavoritosSeries.innerText="- Quitar de Favorito";
}

/* Agregarle un evento al boton de agregar a favorito */
botonFavoritosSeries.addEventListener("click",function (e) {
    e.preventDefault()
    
    /* Si lo incluye, que lo elimine del array y al boton le ponga "Agregar Favorito" */
    if(favoritosSeries.includes(idSerie)){
        let indice = favoritosSeries.indexOf(idSerie);
        favoritosSeries.splice(indice,1);
        botonFavoritosSeries.innerText="+ Agregar a Favorito";
    }else{
    /* Si NO lo incluye, que lo agregue al array y al boton le ponga "Quitar Favorito" */
        favoritosSeries.push(idSerie);
        botonFavoritosSeries.innerText="- Quitar de Favorito";
    }

    /* Si lo incluye o no, quiero poder subir el array al localStorage ->
    Pero tengo que pasarlo a JSON primeramente*/
    let favToString = JSON.stringify(favoritosSeries);

    /* Cuando este en JSON ahora si puedo subirlo al localStorage */
    localStorage.setItem('favoritosSeries',favToString)
    
});