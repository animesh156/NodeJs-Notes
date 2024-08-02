
// // common js export syntax
// const {generateRandomNumber, celciusToFahrenheit} = require('./util');

// console.log(`Random number: ${generateRandomNumber()}`)

// console.log(`celcius to fahrehiet: ${celciusToFahrenheit(0)}`)


// ES module import
import getPosts from "./postController.js"
import { getPostLength } from "./postController.js"

console.log(getPosts())

console.log(`Posts length: ${getPostLength()}`)