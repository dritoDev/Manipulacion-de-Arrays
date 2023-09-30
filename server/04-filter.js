const words = [
    'spray',
    'limit',
    'elite',
    'exuberant',
];


const newArrays = []
for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if (element.length >= 6) {
        newArrays.push(element)
    }
}
console.log('newArrays', newArrays);
console.log('original', words);

const rta = words.filter(item => item.length >= 6)
console.log('rta', rta);
console.log('original', words);



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
const rta3 = orders.filter(item => item.delivered && item.total >= 100)
console.log('rta3',rta3);

const search = (querty) => {
    return orders.filter(item => item.customerName.includes(querty))
}

const rta4 = search('Valen')
console.log(rta4);
console.log(search('hjhjhjh'));