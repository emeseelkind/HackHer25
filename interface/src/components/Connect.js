import React, { useState, useEffect } from "react";
import "./Connect.css";

const Connect = () => {
  const [searchInput, setSearchInput] = useState("");
  const [friendsList, setFriendsList] = useState([]);

  // Fetch users from the backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/users");
        if (!response.ok) throw new Error("Failed to fetch users");
        const users = await response.json();
        setFriendsList(users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []); // Runs once on component mount

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleConnect = (friendId) => {
    console.log(`Connected with friend ID: ${friendId}`);
  };

  // Filter friends based on search input
  const filteredFriends = friendsList.filter((friend) =>
    friend.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="connect-container">
      <div className="friends-section">
        <div className="search-container">
          <h2>Search the Friends Network:</h2>
          <input
            type="text"
            value={searchInput}
            onChange={handleSearchChange}
            placeholder="Search user..."
          />

          <div className="friends-list">
            {filteredFriends.length > 0 ? (
              filteredFriends.map((friend) => (
                <div key={friend.id} className="friend-item">
                  <div className="friend-name">{friend.name}</div>
                  <button
                    className="connect-button"
                    onClick={() => handleConnect(friend.id)}
                  >
                    Connect!
                  </button>
                </div>
              ))
            ) : (
              <p>No users found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
