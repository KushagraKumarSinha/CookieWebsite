import React, { useState, useEffect } from 'react';

const BrowserDetail = () => {
  const [browserDetails, setBrowserDetails] = useState({
    userAgent: '',
    language: '',
    cookieEnabled: false,
    onLine: false,
  });

  useEffect(() => {
    // Access the navigator object to gather browser information
    setBrowserDetails({
      userAgent: navigator.userAgent,
      language: navigator.language,
      cookieEnabled: navigator.cookieEnabled, // Checks if cookies are enabled
      onLine: navigator.onLine, // Checks if the browser is online
    });
  }, []);

  return (
    <div>
      <h1>Browser Information (Navigator Object):</h1>
      <p><strong>User Agent:</strong> {browserDetails.userAgent}</p>
      <p><strong>Language:</strong> {browserDetails.language}</p>
      <p><strong>Cookies Enabled:</strong> {browserDetails.cookieEnabled ? 'Yes' : 'No'}</p>
      <p><strong>Online Status:</strong> {browserDetails.onLine ? 'Online' : 'Offline'}</p>
      <h1>******************************</h1>
    </div>
  );
};

export default BrowserDetail;