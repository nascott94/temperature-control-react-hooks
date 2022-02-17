import React, { useState } from 'react';
import './styles.css';

const App = () => {
  //usestate to set value and color od temperature
  const [temperatureValue, setTemperatureValue] = useState(50);
  const [temperatureColor, setTemperatureColor] = useState('cold');

  const increaseTemperature = () => {
    if (temperatureValue === 100) return;
    const newTemperature = temperatureValue + 1;

    setTemperatureValue(newTemperature);
    if (newTemperature >= 59) {
      setTemperatureColor('hot');
    }
  };

  const decreaseTemperature = () => {
    if (temperatureValue === 0) return;
    const newTemperature = temperatureValue - 1;

    setTemperatureValue(newTemperature);
    if (newTemperature < 68) {
      setTemperatureColor('cold');
    }
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°F
        </div>
      </div>
      <div className="button-container">
        <button onMouseDown={increaseTemperature}>+</button>
        <button onClick={decreaseTemperature}>-</button>
      </div>
    </div>
  );
};

export default App;
