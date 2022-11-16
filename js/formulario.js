let inputbusqueda = document.querySelector('.inputbusqueda');
let formsbusqueda = document.querySelector('.formbusqueda')

formsbusqueda.addEventListener('submit', function (e) {
<<<<<<< HEAD
    
=======
>>>>>>> 2970e3b (avances resultados busqueda)
    if (inputbusqueda.value == '') {
        e.preventDefault();
        alert('Escriba algo')
    }
    else if (inputbusqueda.value.length < 4) {
        e.preventDefault();
        alert('Ponga mas caracteres')
    }
})
<<<<<<< HEAD
=======

/* inputbusqueda.addEventListener('focus', function (e) { */
    /* alert('Esta en busqueda') */
/* }) */
>>>>>>> 2970e3b (avances resultados busqueda)
