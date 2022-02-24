// //GET QUOTES FROM API
// let apiQuotes = [];
//
// async function getQuotes(){
//   const apiUrl = 'https://type.fit/api/quotes';
//   try{
//     const response = await fetch(apiUrl);
//     apiQuotes = await response.json();
//     console.log(apiQuotes);
//   } catch{
//     // Handle error
//   }
// }
//
// //ON LOAD
// getQuotes();
const express = require("express");
const app = express();
const ejs = require('ejs');
const bodyParser = require("body-parser");
const quote = require(__dirname+"/quotes.js")

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));



app.get("/",function(req,res){
  const myQuote = quote();
  res.render("home",{quoteBody:myQuote.text,quoteAuthor:myQuote.author});
})

app.post("/",function(req,res){
  res.redirect("/");
});

app.listen(3000,function(){
  console.log("server up on 3000");
});
