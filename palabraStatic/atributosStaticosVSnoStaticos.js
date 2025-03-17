// Diferencia entre atributos estaticos vs no staticos
class Persona{
    // para crear un atributo estatico se usa la palabra static
    static Objeto1 = 0;// este solo se puede acceder desde las clases padre e hija
    // pero para crear un atributo no estatico solo es la variable y tipo de dato
    email = 'detoprox@gmail.com';// este solo se puede acceder desde los objetos
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(_nombre){
        this._nombre = this.nombre;
    }
}

let persona1 = new Persona('carlos','Vargas');
persona1.nombre = 'ronal';
console.log(persona1.nombre);
// objeto no estatico prueba
console.log(persona1.email);// aqui me permite imprimir desde un objeto de la clase padre
console.log(Persona.email);// pero si lo llamo directo de la clase me da undefined

class Empleado extends Persona{
    constructor(nombre,apellido,cargo){
        super(nombre,apellido);
        this._cargo = cargo;
    }
    get cargo(){
        return this._cargo = cargo;
    }
    set cargo(cargo){
        this._cargo = cargo;
    }
}
let Empleado1 = new Empleado('Estefani','meran','Gerente');
Empleado1.cargo = 'Gerente General';
console.log(Empleado1);
console.log(Empleado1.email);// aqui me permite imprimir desde un objeto de la clase padre
console.log(Empleado.email);// pero si lo llamo directo de la clase me da undefined