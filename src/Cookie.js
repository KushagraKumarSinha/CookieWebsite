import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';

const Cookie = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const savedUsername = Cookies.get('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleSetCookie = () => {
    const newUsername = 'Edmyst'; // Replace with actual input value
    Cookies.set('username', newUsername, { expires: 7 }); // Set cookie to expire in 7 days
    setUsername(newUsername);
  };

  return (
    <div>
      <p>Username: {username}</p>
      <button onClick={handleSetCookie}>Set Cookie</button>
    </div>
  );
};

export default Cookie;