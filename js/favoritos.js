/* Recuperamos el Local Storage de las peliculas favoritas */
let recupeStoragePelis = localStorage.getItem('favoritosPelis');
console.log(recupeStoragePelis);

let favoritosPelis = JSON.parse(recupeStoragePelis);

let pelisFavoritas = document.querySelector("#pelisFavoritas");
let arrayPeliculasFavoritas = '';

console.log(favoritosPelis);

/* Recuperamos el Local Storage de las series favoritas */
let recupeStorageSeries = localStorage.getItem('favoritosSeries');
console.log(recupeStorageSeries);

let favoritosSeries = JSON.parse(recupeStorageSeries);

let seriesFavoritas = document.querySelector('#seriesFavoritas');
let arraySeriesFavoritas = '';

/* EVALUAR SI EL ARRAY TIENE 0 ELEMENTOS o si viene nulo */

if (favoritosPelis == null || favoritosPelis.length == 0) {
    /* No hay favoritos */
    pelisFavoritas.innerHTML = '<p>No hay películas en favoritos</p>'
} else {
    for (let i = 0; i < favoritosPelis.length && i < 5; i++) {
        let apiPeliculas = `https://api.themoviedb.org/3/movie/${favoritosPelis[i]}?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US`
        fetch(apiPeliculas)
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log(data);
                arrayPeliculasFavoritas += `<article class="peliOSerie">
                                            <p class="nombrePeliOSerie">${data.title}</p>
                                            <img src='https://image.tmdb.org/t/p/w500/${data.poster_path}' alt="img" class="tapapelicula">
                                            <a href="./detalle_peliculas.html?id=${data.id}" class="linkadetalle">Ver más</a>
                                        </article>`
            pelisFavoritas.innerHTML = arrayPeliculasFavoritas;

            }).catch(function (error) {
                return error;
            });
        }
    }

if (favoritosSeries == null || favoritosSeries.length == 0) {
    /* No hay favoritos */
    seriesFavoritas.innerHTML = '<p>No hay series en favoritos</p>'
} else {
    for (let i = 0; i < favoritosSeries.length && i < 5; i++) {   
        let apiSeries = `https://api.themoviedb.org/3/tv/${favoritosSeries[i]}?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US&page=1`
        fetch(apiSeries)
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log(data);
                arraySeriesFavoritas += `<article class="peliOSerie">
                                            <p class="nombrePeliOSerie">${data.name}</p>
                                            <img src='https://image.tmdb.org/t/p/w500/${data.poster_path}'  alt="" class="tapapelicula">
                                            <a href="./detalle_peliculas.html?id=${data.id}" class="linkadetalle">Ver más</a>
                                        </article>`
            seriesFavoritas.innerHTML = arraySeriesFavoritas;

            }).catch(function (error) {
                return error;
            });
        }
    }