
//
// OBJECT DESTRUCTURING
//


// const person = {
//     name: "Leandro",
//     age: 18,
//     location : {
//         city: "Lisbon",
//         temp: 17
//     }
// }

// // const name = person.name
// // const age = person.age

// const {name = "PUTA", age} = person
// const {city, temp: temperature} = person.location
// console.log(`${name} is ${age}. He lives in ${city}. It's ${temperature}ºC`)



// const book = {
//     title: "Um Diário de um Banana",
//     author: "Minion Banana",
//     publisher: {
//         name: "ASA Editora"
//     }
// }


// const { name: publisherName = "Self Published" } = book.publisher
// console.log(publisherName)



//
// ARRAY DESTRUCTURING
//

const adress = [
    "Algueirão Mem Martins",
    "Sintra",
    "2725",
    "Portugal"
]

const [street, city, zip, country] = adress
console.log(`You are from ${street} in ${city}. ZIP Code is ${zip}. ${country} CARALHO`)
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
const item = ["Coffee (hot)", "$2.00", "$4.50", "$6.75"]

const [coffee, , mediumPrice] = item
console.log(`A medium ${coffee} costs ${mediumPrice}`)