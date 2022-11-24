let urlPelisPopulares = 'https://api.themoviedb.org/3/movie/popular?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1'
let urlSeriesPopulares = 'https://api.themoviedb.org/3/tv/popular?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1'
let urlMasVistoSeries = 'https://api.themoviedb.org/3/tv/top_rated?api_key=fd6a4e605ab941f2a77d6e640f54a48d&language=en-US&page=1'

// Fetch y agregamos PELICULAS POPULARES ///////////////////////////////////////////////////////
fetch(urlPelisPopulares).then(function (response) {
    return response.json()
}).then(function (data) {
    //Acá ya tenemos los datos finales y es donde debemos escribir nuestro código.
    let arrayDePelisPopulares = data.results;
    console.log(arrayDePelisPopulares);

    //1 Capturo el elemento html en donde quiero hacer una modificación
    let pelisPopulares = document.querySelector('#pelisPopulares');
    let pelisPopus = ''

    //2 Recorro la información de la api y la organizo para mostarla en el html
    for(let i=0; i<5; i++){
        //Dentro del for voy acumulando en la variable una estructura html por cada personaje del array.
        pelisPopus += `<article class="peliOSerie">
                                <p class="nombrePeliOSerie">${arrayDePelisPopulares[i].title}</p>
                                <img src='https://image.tmdb.org/t/p/w500/${arrayDePelisPopulares[i].poster_path}'  alt="Titanic" class="tapapelicula">
                                <a href="./detalle_peliculas.html?id=${arrayDePelisPopulares[i].id}" class="linkadetalle">Ver más</a>
                            </article>`
    }
    //Con toda la estructura html completa ahora la paso al DOM
    pelisPopulares.innerHTML = pelisPopus;
    
}).catch(function (error) {
    console.log(error);
})

// Fetch y agregamos SERIES POPULARES ///////////////////////////////////////////////////////
fetch(urlSeriesPopulares).then(function (response) {
    return response.json()
}).then(function (data) {
    //Acá ya tenemmos los datos finales y es donde debemos escribir nuestro código.
    let arrayDeSeriesPopulares = data.results;
    console.log(arrayDeSeriesPopulares);

    //1 Capturo el elemento html en donde quiero hacer una modificación
    let seriesPopulares = document.querySelector('#seriesPopulares');
    let seriesPopus = ''

    //2 Recorro la información de la api y la organizo para mostarla en el html
    for(let i=0; i<5; i++){
        //Dentro del for voy acumulando en la variable una estructura html por cada personaje del array.
        seriesPopus += `<article class="peliOSerie">
                                <p class="nombrePeliOSerie">${arrayDeSeriesPopulares[i].name}</p>
                                <img src='https://image.tmdb.org/t/p/w500/${arrayDeSeriesPopulares[i].poster_path}'  alt="Titanic" class="tapapelicula">
                                <a href="./detalle_series.html?id=${arrayDeSeriesPopulares[i].id}" class="linkadetalle">Ver más</a>
                            </article>`
    }
    //Con toda la estructura html completa ahora la paso al DOM
    seriesPopulares.innerHTML = seriesPopus;
    
}).catch(function (error) {
    console.log(error);
})

// Fetch y agregamos SERIES MAS VISTAS ///////////////////////////////////////////////////////
fetch(urlMasVistoSeries).then(function (response) {
    return response.json()
}).then(function (data) {
    //Acá ya tenemmos los datos finales y es donde debemos escribir nuestro código.
    let arrayDeSeriesMasVistas = data.results;
    console.log(arrayDeSeriesMasVistas);

    //1 Capturo el elemento html en donde quiero hacer una modificación
    let seriesMasVistas = document.querySelector('#seriesMasVistas');
    let seriesMasVistas1 = ''

    //2 Recorro la información de la api y la organizo para mostarla en el html
    for(let i=0; i<5; i++){
        //Dentro del for voy acumulando en la variable una estructura html por cada personaje del array.
        seriesMasVistas1 += `<article class="peliOSerie">
                                <p class="nombrePeliOSerie">${arrayDeSeriesMasVistas[i].name}</p>
                                <img src='https://image.tmdb.org/t/p/w500/${arrayDeSeriesMasVistas[i].poster_path}'  alt=${arrayDeSeriesMasVistas[i].name} class="tapapelicula">
                                <a href="./detalle_series.html?id=${arrayDeSeriesMasVistas[i].id}" class="linkadetalle">Ver más</a>
                            </article>`
    }
    //Con toda la estructura html completa ahora la paso al DOM
    seriesMasVistas.innerHTML = seriesMasVistas1;
    
}).catch(function (error) {
    console.log(error);
})