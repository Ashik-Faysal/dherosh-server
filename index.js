const express = require("express");
const cors = require("cors");
const app = express();
const cards = require("./data/card.json");
const services = require("./data/services.json");
const servicesSections = require("./data/servicesSection.json");
const clients = require("./data/clients.json");
app.use(cors());
const port = process.env.PORT || 5000;

app.get("/cards", (req, res) => {
  res.send(cards);
});
app.get("/clients", (req, res) => {
  res.send(clients);
});
app.get("/services", (req, res) => {
  res.send(services);
});
app.get("/services-sections", (req, res) => {
  res.send(servicesSections);
});





app.get("/", (req, res) => {
  res.send("Dherosh server is running");
});

app.listen(port, () => {
  console.log(`Server is Running on Port ${port}`);
});
