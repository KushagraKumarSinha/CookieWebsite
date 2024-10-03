import React, { useEffect, useState } from 'react';
import platform from 'platform';

const OSDetail = () => {
  const [osDetails, setOsDetails] = useState({});
  const [info, setInfo] = useState({});

  useEffect(() => {
    const userAgentString = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0';
    const parsedInfo = platform.parse(userAgentString);
    setInfo(parsedInfo); // Set the parsed info in state
    const os = platform.os; // This returns an object with OS details
    setOsDetails(os);
    console.log(os);
  }, []);

  return (
    <div>
      <h1>Operating System Details (Platform.js):</h1>
      <p><strong>Name:</strong> {osDetails.family}</p>
      <p><strong>Major Version:</strong> {osDetails.version}</p>
      <p><strong>Architecture:</strong> {osDetails.architecture}</p>
      <p><strong>Description:</strong> {platform.description}</p>

      <h2>Parsing a given UA String</h2>
      <p><strong>Name:</strong> {info.name}</p>
      <p><strong>Version:</strong> {info.version}</p>
      <p><strong>Layout:</strong> {info.layout}</p>
      <p><strong>Description:</strong> {info.description}</p>

      <h1>******************************</h1>
    </div>
  );
};

export default OSDetail;