// funciones incorporadas en js

// obtener el largo de una cadena en js
 let cadena = "mi nombre es junior";
 console.log(cadena.length);

 // no podemos modificar una cadena en js

 // las cadenas son inmutables
 cadena[0] ="b";
 console.log(cadena[0]);

// si podemos asignar una nueva cadena 
cadena = "asignacion";
console.log(cadena);

// Recorrer cadena caracter

for(let i = 0; i < cadena.length; i++ ){
   console.log(cadena[i]);
}