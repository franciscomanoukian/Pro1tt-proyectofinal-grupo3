let inputbusqueda = document.querySelector('.inputbusqueda');
let formsbusqueda = document.querySelector('.formbusqueda')

formsbusqueda.addEventListener('submit', function (e) {
    if (inputbusqueda.value == '') {
        e.preventDefault();
        alert('Escriba algo')
    }
    else if (inputbusqueda.value.length < 4) {
        e.preventDefault();
        alert('Ponga mas caracteres')
    }
})

/* inputbusqueda.addEventListener('focus', function (e) { */
    /* alert('Esta en busqueda') */
/* }) */
