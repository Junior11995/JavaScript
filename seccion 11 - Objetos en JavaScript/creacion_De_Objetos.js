// tambien se puede creal objetos usando new object()

let pais = new Object();// new object() guarda un espacio vacio en memoria 
pais.nombre = "Republica Dominicana";// para crearle propieadades a este objeto se debe escribir el objeto seguido de la referencia
pais.lugar = "En el caribe";
pais.religion = "Cristiana";

console.log(`Mi pais ${pais.nombre} esta cituado en el ${pais.lugar} y la religion nacional es la ${pais.religion}`);