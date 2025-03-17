// Como crear constantes staticas en JavaScript
class Persona{
    // contador de usuarios
    static contadorUsuario = 0;
    // como crear un limitador de objetos que se puedan crear en esta clase con static y get
    static get limitador(){
        return 2;
    }
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if (Persona.contadorUsuario < Persona.limitador){
            this.IDpersona = ++Persona.contadorUsuario;
        }
        else {
            console.log('Usted ha superado el limite de Objetos que puede crear esta clase');
        }
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    nombreCompleto(){
        return this.IDpersona+' '+this.nombre +' '+ this.apellido;
    }
}

let persona1 = new Persona('Paula','Ramirez');
persona1.nombre = 'adriana';
console.log(persona1.nombre);

let persona2 = new Persona('alexandra','Meran');
persona2.nombre = 'Sofia';
console.log(persona2.nombre);

let persona3 = new Persona('samanta','Fernandes');
persona3.nombre = 'Milka';// aqui como se supero el limitador se ejecuta el else 
console.log(persona3.toString());