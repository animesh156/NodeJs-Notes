import url, { URL } from "url";

const urlString = "https://www.google.com/search?q=Hello+world"

// url object
const urlObj = new URL(urlString)

console.log(urlObj)

// format
console.log(url.format(urlObj))

// import.meta.url - file url

console.log(import.meta.url)

// fileurl to path
console.log(url.fileURLToPath(import.meta.url))

// params
const params = new URLSearchParams(urlObj.search);
console.log(params)
console.log(params.get('q'))
params.append('limit', 5);
params.delete('limit')
console.log(params)

