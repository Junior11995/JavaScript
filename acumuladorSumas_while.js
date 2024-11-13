// acumulador suma con while 

let maximo = 5, acumulador = 0, numero = 1;
let max = 5, acum = 0, num = 1;

while (numero <= maximo) {
    acumulador = acumulador + numero;
    console.log(`suma acumulada while ${acumulador}`);
    numero++
}
// console.log(`suma acumulada while ${acumulador}`);

do {
    acum = acum + num;
   console.log(`suma acumulada do while ${acum}`)
    num++
} while (num <= max);

// console.log(`suma acumulada do while ${acum}`);