let recupeStorage = localStorage.getItem('favoritos');
console.log(recupeStorage);


let favoritos = JSON.parse(recupeStorage);

let section = document.querySelector("#pelisFavoritas");
let personajesFavoritos = ''; /* ---------------------->   OJALDRE ACA */

console.log(favoritos);

/* EVALUAR SI EL ARRAY TIENE 0 ELEMENTOS o si viene nulo */

if (favoritos == null || favoritos.length == 0) {
    /* Muestres no hay favoritos */
    section.innerHTML = '<p>No hay películas en favoritos</p>'
} else {
    
    for (let i = 0; i < favoritos.length; i++) {
        let url = `https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=81faef6942a31915ed87b416fbba64ba&language=en-US`

        fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            peliculasFavoritas += `<article>
                                        <img src=${data.poster_path} alt='img' />
                                        <p>Name: <a href="${data.title}"> ${data.title}</a> </p>
                                        <p>Img: ${data.poster_path} </p>
                                    </article>`;
            section.innerHTML = personajesFavoritos; 

            return data;
        }).catch(function (error) {
            return error;
        });

        
        
    }
}