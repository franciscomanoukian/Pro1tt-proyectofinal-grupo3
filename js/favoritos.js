let recupeStorage = localStorage.getItem('favoritos');
console.log(recupeStorage);


let favoritos = JSON.parse(recupeStorage);

let section = document.querySelector("#pelisFavoritas");
let personajesFavoritos = ''; /* ---------------------->   OJALDRE ACA */

console.log(favoritos);

/* EVALUAR SI EL ARRAY TIENE 0 ELEMENTOS o si viene nulo */

if (favoritos == null || favoritos.length == 0) {
    /* No hay favoritos */
    section.innerHTML = '<p>No hay películas en favoritos</p>'
} else {
    for (let i = 0; i < favoritos.length; i++) {
        let api = `https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US`

        fetch(api)
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                let arrayPelisFavoritas = data;
                console.log(arrayPelisFavoritas);
                peliculasFavoritas += `<article class="peliOSerieReducido">
                                            <p class="nombrePeliOSerie">${arrayPelisFavoritas.title}</p>
                                            <img src="${arrayPelisFavoritas.poster_path}" alt="img" class="tapapelicula">
                                            <a href="./detalle_peliculas.html?id=${arrayPelisFavoritas.id}" class="linkadetalle">Ver más</a>
                                        </article>`

            seccionPeliSerieReducida.innerHTML = peliculasFavoritas;

            }).catch(function (error) {
                return error;
            });
        }
    }