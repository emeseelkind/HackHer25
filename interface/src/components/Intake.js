import "./Intake.css";
import { useState, useEffect } from "react";

function FoodIntake() {
  const [foodItem, setFoodItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [foodItems, setFoodItems] = useState([]);

  // Fetch food items from the server on component mount
  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await fetch("http://localhost:5000/food-intake");
        const data = await response.json();
        setFoodItems(data);
      } catch (error) {
        console.error("Error fetching food intake data:", error);
      }
    };
    fetchFoodItems();
  }, []);

  // Function to handle keypress for saving food intake
  const handleKeyPress = async (event) => {
    if (event.key === "Enter" && foodItem.trim() !== "" && quantity.trim() !== "") {
      try {
        // Save food intake data to the server (or locally if needed)
        const foodData = {
          foodItem,
          quantity
        };

        // Send the food intake data to the backend to save in the file
        await fetch("http://localhost:5000/food_intake", {
          method: "POST", // POST method to save data
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(foodData),
        });

        // Update food items list with the newly added item
        const updatedFoodItems = [...foodItems, { foodItem, quantity }];
        setFoodItems(updatedFoodItems);

        // Save the food items locally (in localStorage)
        localStorage.setItem("foodIntake", JSON.stringify(updatedFoodItems));

        alert("Food intake saved!");

        // Clear input fields after saving
        setFoodItem("");
        setQuantity("");
      } catch (error) {
        console.error("Error saving food intake:", error);
      }
    }
  };

  return (
    <div className="intake-container">
      <div className="intake-box">
        
        {/* Table Section */}
        <div className="intake-table-container">
          <h2 className="intake-title">Today's Food Intake:</h2>
          <table className="intake-table">
            <tbody>
              {foodItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.foodItem}</td>
                  <td>{item.quantity}g</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Total Section */}
          <div className="intake-total">
            <span>Total:</span>
            <span className="total-box">{foodItems.length}</span>
          </div>
        </div>

        {/* Input Section */}
        <div className="input-section">
          <input
            type="text"
            placeholder="Enter food item"
            value={foodItem}
            onChange={(e) => setFoodItem(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <input
            type="number"
            placeholder="Enter quantity (g)"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        </div>
      </div>
    </div>
  );
}

export default FoodIntake;
