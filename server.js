//import http module
const http=require("http")

//create http server or web server
const server=http.createServer((request,response)=>{

    //console.log(request.method)
    //send response to clinet
    //response.end("this is response from http server")
    //GET REQ
    if(request.method=='GET')
    {
       // response.end("this is a get request")
       if(request.url=='/getusers')
       {
        response.end("this response  for users")
       }
       if(request.url=='/getproducts')
       {
        response.end("this response  for ggetproducts")
       }
    }
    if(request.method=="POST")
    {
        response.end("this response for POST request")
    }
    if(request.method=="PUT")
    {
        response.end("this response for PUT request")
    }
    if(request.method=="DELETE")
    {
        response.end("this response for DELETE request")
    }
})


//assign port number
server.listen(3000,()=>console.log("server listening on port 30000...."))
