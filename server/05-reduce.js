const totals = [1, 2, 3, 4];

let suma = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    suma += element;
    
}
console.log(suma);


const rta = totals.reduce((suma, element) => suma + element, 0)
console.log('reduce',rta);