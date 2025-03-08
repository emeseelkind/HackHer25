import React, { useState } from 'react';
import './Connect.css';

const Connect = () => {
  const [searchInput, setSearchInput] = useState('');
  const [friendsList, setFriendsList] = useState([
    { id: 1, name: 'Emese Elkind' },
    { id: 2, name: 'Shri Krishnan' }
  ]);
  
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };
  
  const handleConnect = (friendId) => {
    console.log(`Connected with friend ID: ${friendId}`);
    // Add logic for connecting with friends here
  };
  
  return (
    <div className="connect-container">
      <div className="header">
        <div className="logo-section">
          <div className="logo">
            <span>NB</span>
          </div>
          <h1>NutriByte</h1>
        </div>
        <div className="nav-links">
          <div className="nav-item">Personal</div>
          <div className="nav-item">Community</div>
        </div>
      </div>
      
      <div className="content">
        <div className="sidebar">
          <div className="sidebar-item">
            Intake Goals
          </div>
          <div className="sidebar-item selected">
            Connect Boost
          </div>
        </div>
        
        <div className="friends-section">
          <div className="search-container">
            <h2>Search the Friends Network:</h2>
            <input 
              type="text" 
              value={searchInput} 
              onChange={handleSearchChange} 
              placeholder="user.name"
            />
            
            <div className="friends-list">
              {friendsList.map(friend => (
                <div key={friend.id} className="friend-item">
                  <div className="friend-name">{friend.name}</div>
                  <button 
                    className="connect-button"
                    onClick={() => handleConnect(friend.id)}
                  >
                    Connect!
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;