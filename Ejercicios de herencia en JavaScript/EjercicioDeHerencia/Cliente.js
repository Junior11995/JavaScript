// clase cliente hija 
class Cliente extends Persona {
    static contadorCliente = 0;
    constructor(idFechaRegistro){
        this._idCliente = ++Cliente.contadorCliente;
        this._idFechaRegistro = idFechaRegistro;
    }
    get idCliente(){
        return this._idCliente;
    }
    get idFechaRegistro(){
        return this._idFechaRegistro;
    }
    set idFechaRegistro(idFechaRegistro){
        this._idFechaRegistro = idFechaRegistro;
    }
    toString(){
        return `
        ${super.toString()}
        ${this._idCliente}
        ${this._idFechaRegistro}
        `
    }
}

let cliente1 = new Cliente(25,Date);
cliente1.idCliente = 32;
console.log(cliente1.idCliente);