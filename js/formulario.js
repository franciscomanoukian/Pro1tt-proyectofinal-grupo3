let inputbusqueda = document.querySelector('.inputbusqueda');
let formsbusqueda = document.querySelector('.formbusqueda')

formsbusqueda.addEventListener('submit', function (e) {
    e.preventDefault();
    if (inputbusqueda.value == '') {
        alert('Escriba algo')
    }
    else if (inputbusqueda.value.length < 4) {
        alert('Ponga mas caracteres')
    }
})

inputbusqueda.addEventListener('focus', function (e) {
    alert('Esta en busqueda')
})
