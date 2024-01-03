// SalesforceLoginButton.js
import React from 'react';

const SalesforceLoginButton = () => {
  const handleLogin = () => {
    // Implement Salesforce OAuth login
    window.location.href = 'https://login.salesforce.com/services/oauth2/authorize?response_type=token&client_id=3MVG9fe4g9fhX0E56komSnRHqDj0gmPGeVALSqfgzw2l1yBnKB1GFZnFOD3Mynlsq.6rS.X128b45.95bZy.b&redirect_uri=http://localhost:3000'
  

  return (
    <button onClick={handleLogin}>
      Login to Salesforce
    </button>
  );
  }
}

export default SalesforceLoginButton;
