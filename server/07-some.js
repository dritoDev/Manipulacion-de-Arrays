const numbers = [1, 2, 3, 4, 5];

let rta = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 === 0) {
        rta = true;
        break;
    }
}
console.log('rta', rta);

const even = (element) => element % 2 === 0;

console.log('son.event', numbers.some(even));
// resultado true

