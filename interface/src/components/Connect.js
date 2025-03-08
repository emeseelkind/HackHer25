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
  );
};

export default Connect;