import React, { useState } from 'react';
import Dice from './components/dice';
import './App.css';

function App() {
  const [diceValue, setDiceValue] = useState(1);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    setIsRolling(true);

    setTimeout(() => {
      const newValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(newValue);
      setIsRolling(false);
    }, 300);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Игральная кость</h1>
      
      <div className={`dice-wrapper ${isRolling ? 'rolling' : ''}`}>
        <Dice value={diceValue} />
      </div>

      <p className="result-text">Выпало число: <strong>{diceValue}</strong></p>

      <button 
        className="roll-button" 
        onClick={rollDice}
        disabled={isRolling}
      >
        {isRolling ? 'Бросаем...' : 'Бросить кубик'}
      </button>
    </div>
  );
}

export default App;
