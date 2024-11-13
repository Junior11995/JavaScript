/*
Suma acumulativo 
*/

let numero = 5 , acumulador = 1, extra = 2;

for (let i = 1; i < numero; i++) {
    acumulador = extra + acumulador;
    console.log(` Suma Acumulada ${acumulador} `);
    extra = i + 2;

}

/*
for i = 1
extra = 2
acumulador =  (extra = 2) + (acumulador = 1)
consola acumulador = 3

extra = (i = 1) + 2;

for i = 2
extra = 3
acumulador =  (extra = 3) + (acumulador = 3)
consola acumulador = 6

extra = (i = 2) + 2;

for i = 3
extra = 4
acumulador =  (extra = 4) + (acumulador = 6)
consola acumulador = 10

extra = (i = 3) + 2;

for i = 4
extra = 5
acumulador =  (extra = 5) + (acumulador = 10)
consola acumulador = 15

extra = (i = 4) + 2;

*/