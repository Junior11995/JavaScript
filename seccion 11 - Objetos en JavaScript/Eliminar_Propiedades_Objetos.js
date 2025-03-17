// Eliminar propiedades de un Objeto en JavaScript

let persona = {
    nombre: "Junior Alexis",
    apellido: "Valera Rijo",
    Edad: 29,
    Email: "detoprox@gmail.com",
    Telefono: "1-809-000-0000"
}

persona.nacionalidad = " Dominicano";// se le pueden añadir nuevas propiedades desde fuera al objeto 
console.log(persona.nombre + persona.nacionalidad);

console.log(persona);

// Eliminar una propiedad de un Objeto
delete persona.nacionalidad;// usando delete podemos eliminar cualquier propiedad 
console.log(persona.nacionalidad);

console.log(persona);
// Consideraciones 
/**
 * Si bien crear propiedades desde fuera nos da facilidad tambien puede probocar errores,
   como usar una propiedad tel y otra te1 esto creare dos propiedades diferentes
 */