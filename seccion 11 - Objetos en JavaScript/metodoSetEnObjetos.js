// Comparacion de set y get en Objetos de JavaScript

let persona ={
    nombre: "Junior Alexis",
    apellido: "Valera Rijo",
    email: "detoprox@gmail.com",
    cel: "+1-809-000-0000",
    Idioma: 'es',
    get lenguage(){
        return this.Idioma.toUpperCase();
    },
    set lang2(Idioma) {
        return this.Idioma = Idioma.toUpperCase();
    }
}

console.log(persona.lenguage);// en este caso la propiedad se convierte en mayuscula desde dentro del objeto
persona.lang2 = "es";// aqui con set se envia una llamada en minuscula y vuelve en mayuscula
console.log(persona.Idioma);// Aqui se puede ver que ya esta en mayuscula