
const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

console.log('origin', orders);
const rta = orders.map(item => item.total)
console.log('rta', rta);

const rta2 = orders.map(item => {
    item.tax = .03;
    return item;
})
console.log('rta2', rta2);
console.log('origin', orders);

const rta3 = orders.map((item) => {
    return {
        ...item,
        tax: 0.45,
    }
})
console.log('rta3', rta3);
console.log('original', orders);