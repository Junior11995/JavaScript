// Uso de Get y Set en clases de JavaScript
class Persona{
    constructor(_nombre,_apellido,_nombreCompleto){
        this.nombre = _nombre;
        this.apellido = _apellido;
        this.nombreCompleto = this.nombre +' '+this.apellido;

    }

    get nombreCompleto1(){// recibe la entrada
        return this._nombreCompleto;
    }

    set nombreCompleto1 (_nombreCompleto){// de aqui sale la peticion
        this._nombreCompleto = _nombreCompleto;
    }
}

let Persona1 = new Persona('Alexis','Valera');

let Nomcompleto = ['Junior','Rijo']

Persona1._nombreCompleto = Nomcompleto[0]+' '+Nomcompleto[1];

console.log(Persona1._nombreCompleto);