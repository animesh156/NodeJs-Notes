
function generateRandomNumber(){
    return Math.floor(Math.random()* 100) + 1;
}

function celciusToFahrenheit(celcius){
    return (celcius*9) / 5 + 32;
}

// common js import syntax
module.exports = {
    generateRandomNumber,
    celciusToFahrenheit
}