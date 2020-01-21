import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './components/users/Users';

function App() {
  return (
    <div>
      {/* this title is injected into Users through props in Users you can change the values here */}
      <Users title="User List"/>
    </div>
  );
}

export default App;
