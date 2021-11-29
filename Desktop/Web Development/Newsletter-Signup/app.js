const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");


const app = express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));




app.get("/",function(req,res){
  res.sendFile(__dirname+"/signup.html")
});

app.post("/",function(req,res){
  var first = req.body.fName;
  var last  = req.body.lName;
  var email = req.body.email;

  var data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: first,
          LNAME: last
        }
      }
    ]
  };

  var jsonData =JSON.stringify(data);

  const url = "https://us20.api.mailchimp.com/3.0/lists/71e5742f97";

  const options = {
    method: "POST",
    auth: 'Dhillon:0f8b375011a1e9b06fca037b55705236-us20'

  }

  const request=https.request(url,options,function(response){
    console.log(response.statusCode);
      if(response.statusCode === 201){
        res.sendFile(__dirname+"/success.html")
      }
      else{
        res.sendFile(__dirname+"/failure.html")
      }
      response.on("data",function(data){
        console.log(JSON.parse(data));
      })
  })


  request.write(jsonData);
  request.end();

});

app.post("/failure",function(req,res){
  res.redirect("/");
})


app.listen(process.env.PORT || 3000,function(req,res){
  console.log("Server runnning on 3000");
})

// API KEY
// 0f8b375011a1e9b06fca037b55705236-us20


// List ID
// 71e5742f97
