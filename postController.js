const posts = [
    {id:1, title:"Post One"},
    {id:2, title:"Post Two"},
    {id:3, title:"Post Three"}
];

// ES export syntax
 const getPosts = () => posts;

 export  const getPostLength = () => posts.length;

 export default getPosts;