import { createServer } from "http";
const PORT = process.env.PORT;

const users = [
  { id: 1, name: "Animesh" },
  { id: 2, name: "Raj" },
  { id: 3, name: "Sikha" },
];

// logger middleware

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// json middleware
const jsonMiddleWare = (req,res,next) => {
    res.setHeader("Content-Type", "application/json");
    next();
}

// route handler for get /api/users
const getUserHandler = (req,res) => {
    res.write(JSON.stringify(users));
    res.end()
} 

// route handler for get /api/users/id

const getUserByIdHandler = (req,res) => {
    const id = req.url.split("/")[3];
      const user = users.find((user) => user.id === parseInt(id));
      if (user) {
        res.write(JSON.stringify(user));
        res.end()
      } else {
        res.statusCode = 404;
        res.write(JSON.stringify({ msg: "User not found" }));
        res.end()
      }
}

// Route handler for POST /api/users

const createUserHandler = (req,res) => {
    let body ='';
    // listen for data
    req.on('data', (chunk) => {
        body += chunk.toString()
    })

    req.on('end', () => {
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser));
        res.end();
    })

}


// not found handler

const notFoundHandler = (req,res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({ msg: "route not found" }));
    res.end()
}



// rest api
const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleWare(req,res, () => {
        if(req.url ==='/api/users' && req.method=='GET'){
            getUserHandler(req,res);
        } else if(req.url.match(/\api\/users\/([0-9]+)/) && req.method =='GET') {
            getUserByIdHandler(req,res);
        }
            else if(req.url === '/api/users' && req.method === 'POST'){
                 createUserHandler(req,res);
            }
         else {
            notFoundHandler(req,res);
        }
    })
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
