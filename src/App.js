import React, { useState } from 'react';
import './styles.css';

const App = () => {
  //to do
  //use state to set base temperature value and color and then update based on conditional statements
  //will need two helper functions one for increasing temperature and one for decreasing

  const [temperatureValue, setTemperatureValue] = useState(50);
  const [temperatureColor, setTemperatureColor] = useState('blue');

  return <div className="app-container">hello joji hi</div>;
};

export default App;
