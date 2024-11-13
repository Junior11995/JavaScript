// Redondeo y truncado en JavaScript
let numero = 10.5, redondeo,truncado;

// Redondeo
// Math.round() redonde el valor entero mas cercano 
// .5 o superior redondea al valor entero superior mas sercano
redondeo = Math.round(numero);
console.log(redondeo);// a partir de .5 redondea al numero superior mas sercano

// Truncado
// Math.trunc() Elimina el punto decimal (La parte flotante)
truncado = Math.trunc(numero);// Elimina toda la parte flotante
console.log(truncado);