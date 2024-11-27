// Uso de atributos estaticos en JavaScript
class Persona{
    static ObjetoContador = 0;// asi se declara un atributo statico en javascript
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.ObjetoContador++;// asi se puede incrementar un atributo statico en javascript
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
}

class Empleado extends Persona{
    constructor(nombre,apellido,cargo){
        super(nombre,apellido);
        this._cargo = cargo;
        Persona.ObjetoContador++;
    }
    get cargo(){
        return this._cargo;
    }
    set cargo(_cargo){
        this._cargo = this.cargo;
    }
}

let Empleado1 = new Empleado('Secretaria');
Empleado1._cargo = 'Secretaria notaria';
console.log(Empleado.ObjetoContador);// el atributo statico solo puede ser accedido de una clase padre o hija

let persona1 = new Persona('Juan','valdez');
persona1.nombre='Carlos';
console.log(Persona.ObjetoContador);

