const express = require("express");

var app = express();

app.get("/", (req, res) => {
  res.status(404).send({ error: "Page not found!", name: "To Do app v1.0" });
});

app.get("/users", (req, res) => {
  res.status(200).send([
    {
      name: "Mike",
      age: 28
    },
    {
      name: "phDang",
      age: 24
    }
  ]);
});

const PORT = process.env.PORT || 6069;
app.listen(PORT, () => {
  console.log("Server is now running!");
});

module.exports.app = app;
