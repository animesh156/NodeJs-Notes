// console.log(process.argv);

// process.env
console.log(process.env.COMPUTERNAME);

// pid 
console.log(process.pid)

// cwd 
console.log(process.cwd());

// title
console.log(process.title)

// memeoryUsage
console.log(process.memoryUsage())

// uptime
console.log(process.uptime())


process.on('exit', (code)=> {
  console.log(`About to exit with code: ${code}`);
})


// exit succes exits
process.exit(0);  

// console.log('hello after exit')

