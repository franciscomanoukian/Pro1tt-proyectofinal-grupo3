let qs = location.search;
let qsObjLit = new URLSearchParams(qs);

let idPeli = qsObjLit.get('id_genero')


let idSeries = qsObjLit.get('id_genero')

let urlDetalleGeneroPeliculas = `https://api.themoviedb.org/3/discover/movie?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${idPeli}&with_watch_monetization_types=flatrate`
let urlDetalleGeneroSeries = `https://api.themoviedb.org/3/discover/tv?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${idSeries}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`

let tituloGenero = document.querySelector('.tituloGenero')

fetch(urlDetalleGeneroPeliculas).then(function (response) {
    return response.json()
}).then(function (data) {
    let arrayDeResultadosPelis = data.results   
    console.log(arrayDeResultadosPelis);                           
    let detalleGenerosPelis = ''
    let generosPeliculas = document.querySelector('#generospeliculas')


    //2 Recorro la información de la api y la organizo para mostarla en el html
    for(let i=0; i<5; i++){
        //Dentro del for voy acumulando en la variable una estructura html por cada personaje del array.
        detalleGenerosPelis += `<article class="peliOSerie">
                                <p class="nombrePeliOSerie">${arrayDeResultadosPelis[i].title}</p>
                                <img src='https://image.tmdb.org/t/p/w500/${arrayDeResultadosPelis[i].poster_path}'  alt="" class="tapapelicula">
                                <a href="./detalle_peliculas.html?id=${arrayDeResultadosPelis[i].id}" class="linkadetalle">Ver más</a>
                            </article>`
    }
    //Con toda la estructura html completa ahora la paso al DOM
    generosPeliculas.innerHTML = detalleGenerosPelis;
}).catch(function (error) {
    console.log('el error es' + error);
    
})

fetch(urlDetalleGeneroSeries).then(function (response) {
    return response.json()
}).then(function (data) {
    let arrayDeResultadosSeries = data.results
    console.log(arrayDeResultadosSeries);
    let detalleGeneroSeries = ''
    let generosSeries = document.querySelector('#generosseries')

    for(let i=0; i<5; i++){
        detalleGeneroSeries += `<article class="peliOSerie">
                                <p class="nombrePeliOSerie">${arrayDeResultadosSeries[i].title}</p>
                                <img src='https://image.tmdb.org/t/p/w500/${arrayDeResultadosSeries[i].poster_path}'  alt="" class="tapapelicula">
                                <a href="./detalle_peliculas.html?id=${arrayDeResultadosSeries[i].id}" class="linkadetalle">Ver más</a>
                            </article>`
    }
    generosSeries.innerHTML = detalleGeneroSeries;
}).catch(function (error) {
    console.log('el error es' + error);
})