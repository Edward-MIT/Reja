

const http = require("http");
const app = require("./app");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://Edward_MIT:2C1XwA84vUsgTJPC@cluster0.kyw1m.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0";


mongodb.connect(connectionString, {useNewUrlParser:true, useUnifiedTopology: true,}, (err, client) =>{
  if (err) console.log("Errror On Connection");
  else{
    console.log("muvaffaqiyatli ulandi");
    const server = http.createServer(app);
    let PORT = 3000;
    server.listen(PORT , function () {
    console.log(`The server is running sucsessfully on port: ${PORT}, http://localhost:${PORT}`);

});
  }
});





const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT , function () {
  console.log(`The server is running sucsessfully on port: ${PORT}, http://localhost:${PORT}`);

});