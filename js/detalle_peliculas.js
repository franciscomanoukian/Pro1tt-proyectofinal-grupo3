let qs = location.search;
let qsObjLit = new URLSearchParams(qs);

let idPeli = qsObjLit.get('id')

let urlDetalle = `https://api.themoviedb.org/3/movie/${idPeli}?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US`

fetch(urlDetalle).then(function (response) {
    return response.json()
}).then(function (data) {
    //Acá ya tenemmos los datos finales y es donde debemos escribir nuestro código.
    let resultados = data.results;
    console.log(data);

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