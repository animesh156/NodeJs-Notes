import http from 'http';
import fs from 'fs/promises';
import url from 'url'
import path from 'path'
const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
// get current path
// __filename  gives file name 
// __dirname  gives  path

// console.log(__filename, __dirname);


const server = http.createServer(async (req,res) =>{
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;
    
    // res.end(JSON.stringify({message: 'Server Error'}));

    
    // console.log(req.url)
    // console.log(req.method)

    try {
        if(req.method === 'GET') {
         let filePath;
            if(req.url === '/'){
               filePath = path.join(__dirname, 'public', 'index.html') 
            }
            else if(req.url === '/about'){
                filePath = path.join(__dirname, 'public', 'about.html') 
            } else {
               throw new Error('not found')
            }

            const data = await fs.readFile(filePath)
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();

        } else {
            throw new Error('Method not found')
        }
    } catch (error) {
          res.writeHead(500, {'Content-Type': 'text/plain'})
                res.end("Server error")
    }

   
   
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
