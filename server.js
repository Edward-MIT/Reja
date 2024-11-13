console.log("Hello world!");
const express = require ("express");
const app = express();
const http = require("http");

//
// 1 kirish codelari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// 2 Session ga bogliq kodlar

// 3 views ga bogliq codelar
app.set("views", "views");
app.set("view engine", "ejs");

// 4 routingga bog'liq codelar
// app.get("/hello", function (req, res) {
//   res.end("<h1>Hello world by Edward MIT</h1>");
// });
// app.get("/gift", function (req, res) {
//   res.end("Bugun sening kuning, kuning sening bugun");
// });
app.post("/create-item", (req, res)=>{
   console.log(req.body);
   res.json({test: "succes"});
});

app.get("/", function(req, res){
  res.render("harid");
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT , function () {
  console.log(`The server is running sucsessfully on port: ${PORT}`);

});
