// App.js
import React from 'react';
import SalesforceLoginButton from './SalesforceLoginButton';
import ValidationRuleList from './ValidationRuleList';
import ToggleValidationRuleButton from './ToggleValidationRuleButton';
import DeployChangesButton from './DeployChangesButton';

function App() {
  // Placeholder for OAuth token
  const [accessToken, setAccessToken] = React.useState(null);

  // Placeholder for validation rules
  const [validationRules, setValidationRules] = React.useState([]);

  // Placeholder for validation rule toggling
  const handleToggleValidationRule = (ruleName, isActive) => {
    // Placeholder for toggle logic
    console.log(`Toggling rule: ${ruleName}, IsActive: ${isActive}`);
  };

  // Placeholder for deploying changes
  const handleDeployChanges = () => {
    // Placeholder for deploy logic
    console.log('Deploying changes');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Salesforce Integration App</h1>
        {!accessToken ? (
          <SalesforceLoginButton setAccessToken={setAccessToken} />
        ) : (
          <>
            <ValidationRuleList
              validationRules={validationRules}
              setValidationRules={setValidationRules}
            />
            <ToggleValidationRuleButton
              ruleName="ExampleRule" // Replace with an actual rule name
              isActive={true} // Replace with the actual status of the rule
              onToggle={handleToggleValidationRule}
            />
            <DeployChangesButton onClick={handleDeployChanges} />
          </>
        )}
      </header>
    </div>
  );
}

export default App;
