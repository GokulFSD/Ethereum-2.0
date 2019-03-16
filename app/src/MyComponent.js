import React from "react";
import {
  AccountData,
  ContractData,
  ContractForm,
} from "drizzle-react-components";

import logo from "./logo.png";

export default ({ accounts }) => (
  <div className="App">
    <div>
      <img src={logo} alt="drizzle-logo" />
      <h1>Drizzle Examples</h1>
      <p>Examples of how to get started with Drizzle in various situations.</p>
    </div>

    <div className="section">
      <h2>Active Account</h2>
      <AccountData accountIndex="0" units="ether" precision="3" />
    </div>

    <div className="section">
      <h2>Add Employee </h2>
      <p>
        Employess can be added to the list Here.
      </p>
      <p>
        <strong>Name: </strong>
        <ContractData contract="Empl" method="" />
        <ContractForm 
          contract="Empl" 
          method="_createEmployee"
          labels={["Name", "Employee Address"]}
        />
      </p>
      
    </div>
    <div className="section">
      <h2>Manager </h2>
      <p>
        Managers Reward Employees.
      </p>
      <p>
        <strong>Name: </strong>
        <ContractData contract="Manag" method="" />
        <ContractForm 
          contract="Empl" 
          method="_createEmployee"
          labels={["Name", "Employee Address"]}
        />
      </p>
      
    </div>
    
    
  </div>
);
