let urlTMDB = 'https://api.themoviedb.org/3/movie/76341?api_key=81faef6942a31915ed87b416fbba64ba'
console.log(urlTMDB);

fetch(urlTMDB).then(function (response) {
    return response.json()
}).then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.log(error);
})

