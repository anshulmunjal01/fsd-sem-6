const http = require('http');
const axios = require('axios');
const port = 3002;
const server = http.createServer(async(req,res) =>{
    console.log("new request recieved");
    res.writeHead(200,{'Content-Type': 'text/html'});
    // const response = await(fetch("https://api.github.com/users"))
    // const data = await response.json();
    const response = await axios.get("https://api.github.com/search/users",{
        params:{
            q:"location:ghaziabad"
        }
    });
    const productsdata = response.data.items;
    let frontdata = `<htmL><head></head><body>`
    productsdata.forEach((product)=>{
        frontdata+= `<div><img src ="${product.avatar_url}"></div>`
    });
    frontdata+=`</body></html>`
    res.end(frontdata);
});
server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);

});