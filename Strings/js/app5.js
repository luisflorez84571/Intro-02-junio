//3 metodos utile mas .replace .slice .repeat .split

//repleace
const producto = 'Monitor de 21 pulgadas';
console.log(producto);
console.log(producto.replace("21","24"));
console.log(producto.replace('pulgadas','"'));

//slice permite es extraer una oarte de un string
console.log(producto.slice(0.10));

//metodo repeat
console.log(producto.repeat(3));

//metodo split
const actividad = 'Estoy aprendiendo JavaScript ES6';
console.log(actividad.split(""));