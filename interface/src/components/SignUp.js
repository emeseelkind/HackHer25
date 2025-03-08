import "./signup.css";
import { useState } from "react";

function SignUp() {
  const [username, setUsername] = useState("");

  const handleKeyPress = async (event) => {
    if (event.key === "Enter" && username.trim() !== "") {
      try {
        await fetch("http://localhost:5000/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username }),
        });
        alert("Username saved!");
        setUsername(""); // Clear input after saving
      } catch (error) {
        console.error("Error saving username:", error);
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <p className="signup-text">Please enter your username:</p>
        <input
          type="text"
          className="signup-input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
    </div>
  );
}

export default SignUp;