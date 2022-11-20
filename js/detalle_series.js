let qs = location.search;
let qsObjLit = new URLSearchParams(qs);

let idSerie = qsObjLit.get('id')
console.log(idSerie);