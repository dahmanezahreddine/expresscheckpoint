const express = require("express");
const app = express();
const port = 3000;
const dateTime = new Date();
const dayweek = dateTime.getDay();
const hours = dateTime.getHours();
console.log(dayweek);
console.log(hours);
console.log(dateTime);
const timemidelware = (req, res, next) => {
  if (dayweek > 1 && dayweek <= 5 && hours >= 9 && hours <= 17) {
    return next();
  } else return res.send("closed");
};
app.use(timemidelware);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/HomePage.html");
});
app.get("/OurServices", (req, res) => {
  res.sendFile(__dirname + "/pages/OurServices.html");
});
app.get("/ContactUs", (req, res) => {
  res.sendFile(__dirname + "/pages/ContactUs.html");
});
app.listen(port);
