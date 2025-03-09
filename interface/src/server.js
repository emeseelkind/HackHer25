const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); // Allow frontend requests

const usersFile = "users.txt";
const foodIntakeFile = "food_intake.txt"; // New file

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

// Endpoint to get food intake from food_intake.txt
app.get("/food_intake", (req, res) => {
  fs.readFile(foodIntakeFile, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).json({ error: "Failed to read food intake" });
    }

    console.log("Raw food intake data:", data); // Debugging log

    const foodIntake = data
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line !== ""); // Remove empty lines

    console.log("Parsed food intake:", foodIntake); // Debugging log

    res.json(foodIntake);
  });
});

// Endpoint to save food intake data to food_intake.txt
app.post("/food_intake", (req, res) => {
  const { foodItem, quantity } = req.body;

  if (!foodItem || !quantity) {
    return res.status(400).json({ error: "Food item and quantity are required." });
  }

  // Create the entry string
  const foodEntry = `${foodItem}: ${quantity}g`;

  // Check if the food intake file exists, create it if not
  fs.exists(foodIntakeFile, (exists) => {
    if (!exists) {
      // If the file doesn't exist, create it with the new food entry
      fs.writeFile(foodIntakeFile, foodEntry + "\n", (err) => {
        if (err) {
          console.error("Error creating file:", err);
          return res.status(500).json({ error: "Failed to create food intake file" });
        }

        console.log("Food intake file created and saved:", foodEntry);
        res.status(201).json({ message: "Food intake saved!" });
      });
    } else {
      // If the file exists, append the new food entry
      fs.appendFile(foodIntakeFile, foodEntry + "\n", (err) => {
        if (err) {
          console.error("Error saving food intake:", err);
          return res.status(500).json({ error: "Failed to save food intake" });
        }

        console.log("Food intake saved:", foodEntry);
        res.status(201).json({ message: "Food intake saved!" });
      });
    }
  });
});

// Start the server
app.listen(5000, () => console.log("Server running on port 5000"));
