const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); // Allow frontend requests

const usersFile = "users.txt";

// Endpoint to get users from users.txt
app.get("/users", (req, res) => {
  fs.readFile(usersFile, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).json({ error: "Failed to read users" });
    }

    console.log("Raw file data:", data); // Debugging log

    const users = data
      .split("\n")
      .map((name) => name.trim())
      .filter((name) => name !== "") // Remove empty lines
      .map((name, index) => ({ id: index + 1, name }));

    console.log("Parsed users:", users); // Debugging log

    res.json(users);
  });
});

// Start the server
app.listen(5000, () => console.log("Server running on port 5000"));
