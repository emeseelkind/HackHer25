const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); // Allow frontend requests

app.post("/signup", (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).send("Username is required");

  fs.appendFile("users.txt", username + "\n", (err) => {
    if (err) {
      console.error("Error saving username:", err);
      return res.status(500).send("Failed to save username");
    }
    res.status(200).send("Username saved successfully");
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
