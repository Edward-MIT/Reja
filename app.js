console.log("Hello world!");
const express = require ("express");
const app = express();
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8" , (err,data) => {
  if(err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data)
  }
});

//MongoDBni ulaymiz



// 1 kirish codelari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// 2 Session ga bogliq kodlar

// 3 views ga bogliq codelar
app.set("views", "views");
app.set("view engine", "ejs");

// 4 routingga bog'liq codelar

app.post("/create-item", (req, res)=>{
   console.log(req.body);
   res.json({test: "succes"});
});

// publishingdagi codelar

app.get('/author', (req, res) =>{
  res.render("author", {user: user});
});



app.get("/", function(req, res){
  res.render("reja");
});

module.exports = app;
