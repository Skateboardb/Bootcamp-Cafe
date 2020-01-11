var express = require("express");
var path = require("path");

var app = express();
var PORT = 8000 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [];
var waitlist = [];

//home
//tables
//reserve
app.listen(PORT, function(){
    console.log("Server listening on post: " + PORT);
})

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "reserve.html"));
});
//post function 

app.get("/table", function (req, res){
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.post("/reserve", function(req, res){
    var newReservation = req.body;
    console.log(newReservation);
    if (reservations.length < 5){
        reservations.push(newReservation);
        res.json(true);
    }else{
        waitlist.push(newReservation);
        res.json(false);
    }
})