// como imprimir objetos en JavaScript

let persona = {
    Nombre: " Junior Alexis",
    Apellido: "Valera Rijo",
    Edad: 29,
    Emai: "detoprox@gmail.com",
    NumeroDeCelular: "+1-809-000-0000"
}

// si imprimimos el objeto principal sin darle un valor en el navegador solo se vera object en la salida ejemplo
console.log(persona);// en la consola se ven todos los elemetos pero en el navedador solo sale object

// formas de imprimir objetos en javaScript para que se puedan ver en el navegador 

// Imprimir Objetos concatenando 
console.log(persona.Nombre + " " + persona.Apellido);

// Imprimir con for in

for ( ImprimirObjeto in persona){
    console.log(ImprimirObjeto);
    console.log(persona[ImprimirObjeto]);
}

// Usando la propiedad JSON 

let ImprimirJson = JSON.stringify(persona);
console.log(ImprimirJson);