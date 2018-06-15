console.log("destructuring");

const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'Philadelphia',
        temp: 92
    }
};

const {name: firstName = 'Anonymous', age} = person;

console.log(`${firstName} is ${age}.`);

const {city, temp: temperature} = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} in ${city}.`);
}


const book = {
    title: ' Ego is the enemy',
    author: ' Ryan Holiday',
    publisher: {
        name: 'Penguim'
    }
}


const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName);


const address = ['1299 S Jupiter Street' , 'Philadelphia', ' Pensylvania', '19417'];

//const [street, city2, state, zip] = address;
const [, city2, state = 'New York',] = address;

console.log(`You are in ${city2} ${state}.`)

const item = ['Coffee (hot)', '$2.00' , '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}. `)