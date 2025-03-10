const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Define file paths
const usersFile = path.join(__dirname, "src", "users.txt");
const srcDir = path.join(__dirname, "src");
const foodIntakeFile = path.join(__dirname, "src", "food_intake.txt");

// Ensure the components directory exists
if (!fs.existsSync(srcDir)) {
  fs.mkdirSync(srcDir);
}

// Route to save user data
app.post("/save_user", (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ error: "Username is required." });
  }

  // Save the username to the users file
  fs.appendFile(usersFile, username + "\n", (err) => {
    if (err) {
      console.error("Error saving user:", err);
      return res.status(500).json({ error: "Failed to save user" });
    }

    console.log("User saved:", username);
    res.status(201).json({ message: "User saved successfully!" });
  });
});

// Route to save food intake
app.post("/food_intake", (req, res) => {
  const { foodItem, quantity } = req.body;

  if (!foodItem || !quantity) {
    return res.status(400).json({ error: "Food item and quantity are required." });
  }

  const foodEntry = `${foodItem}: ${quantity}g\n`;

  // Save the food item and quantity to the food intake file
  fs.appendFile(foodIntakeFile, foodEntry, (err) => {
    if (err) {
      console.error("Error saving food intake:", err);
      return res.status(500).json({ error: "Failed to save food intake" });
    }

    console.log("Food intake saved:", foodEntry);
    res.status(201).json({ message: "Food intake saved successfully!" });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
