const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

let users = []; // fake database

// GET users
app.get("/users", (req, res) => {
  res.json(users);
});

// ADD user
app.post("/users", (req, res) => {
  const { name } = req.body;
  users.push({ id: users.length + 1, name });
  res.json({ message: "User added" });
});

app.listen(6950, () => {
  console.log("Server running on http://localhost:6950");
});
