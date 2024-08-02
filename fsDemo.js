//  import fs from 'fs'

// import { readFile } from "fs"
import fs from "fs/promises"

// read file async version
//  fs.readFile('./test.txt', 'utf8', (err,data) => {
//     if(err) throw err;
//     console.log(data);
//  });


// //  readFile sync version
// const data = fs.readFileSync('./test.txt', 'utf8')

// console.log(data);

// readfile - promise .then
// fs.readFile('./test.txt','utf8')
// .then((data) => console.log(data))
// .catch((err) => console.log(err));

// readile async/await

const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt','utf8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

// write file
const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'new lines added');
        console.log("file written");
    } catch (err) {
        console.log(err);
    }
}

// append file

const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt','\nappended lines')
        console.log('appended')
    } catch (error) {
        console.log(error);
    }
}



// writeFile();
appendFile();
readFile();
