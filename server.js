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
app.listen(PORT, function() {
  console.log("Server listening on post: " + PORT);
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view/home.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "view/reserve.html"));
});

app.get("/table", function(req, res) {
  res.sendFile(path.join(__dirname, "view/tables.html"));
});

app.get("/api/tables", function(req, res) {
  res.json(reservations);
});

app.get("/api/waitlist", function(req, res) {
  res.sendFile(path.join(__dirname, "api/waitlist.html"));
  res.json(waitlist);
});

app.post("/reserve" && "/api/tables", function(req, res) {
  var newReservation = req.body;
  console.log(newReservation);
  if (reservations.length < 5) {
    reservations.push(newReservation);
    res.json(true);
  } else {
    waitlist.push(newReservation);
    res.json(false);
  }
});

