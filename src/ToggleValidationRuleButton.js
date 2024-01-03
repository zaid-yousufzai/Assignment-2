// ToggleValidationRuleButton.js
import React from 'react';
import axios from 'axios';

const ToggleValidationRuleButton = ({ ruleName, isActive, onToggle }) => {
  const handleToggle = async () => {
    try {
      // Implement logic to toggle validation rule in Salesforce
      await axios.patch(`SALESFORCE_REST_ENDPOINT/validationRuleManager/${ruleName}`, {
        isActive: !isActive,
      });
      onToggle(ruleName, !isActive);
    } catch (error) {
      console.error('Error toggling validation rule:', error);
    }
  };

  return (
    <button onClick={handleToggle}>
      {isActive ? 'Disable' : 'Enable'} Rule
    </button>
  );
};

export default ToggleValidationRuleButton;
