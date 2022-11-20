let recupeStorage = localStorage.getItem('favoritos');
console.log(recupeStorage);


let favoritos = JSON.parse(recupeStorage);

let pelisFavoritas = document.querySelector("#pelisFavoritas");
let arrayPeliculasFavoritas = '';

let seriesFavoritas = document.querySelector('#seriesFavoritas');
let arraySeriesFavoritas = '';

console.log(favoritos);

/* EVALUAR SI EL ARRAY TIENE 0 ELEMENTOS o si viene nulo */

if (favoritos == null || favoritos.length == 0) {
    /* No hay favoritos */
    section.innerHTML = '<p>No hay películas en favoritos</p>'
} else {
    for (let i = 0; i < 5; i++) {
        let apiPeliculas = `https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US`
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

    /* for (let i = 0; i < 5; i++) {
        let apiSeries = `https://api.themoviedb.org/3/tv/${favoritos[i]}?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US&page=1`
        fetch(apiSeries)
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log(data);
                arraySeriesFavoritas += `<article class="peliOSerie">
                                            <p class="nombrePeliOSerie">${data.title}</p>
                                            <img src='https://image.tmdb.org/t/p/w500/${data.poster_path}'  alt="" class="tapapelicula">
                                            <a href="./detalle_peliculas.html?id=${data.id}" class="linkadetalle">Ver más</a>
                                        </article>`

            seriesFavoritas.innerHTML = arraySeriesFavoritas;

            }).catch(function (error) {
                return error;
            });
        } */