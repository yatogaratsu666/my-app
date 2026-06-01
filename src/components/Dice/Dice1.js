import React from 'react';
import styles from './Dice.module.css';

const diceImages = {
  1: '/images/dice1.png',
  2: '/images/dice2.png',
  3: '/images/dice3.png',
  4: '/images/dice4.png',
  5: '/images/dice5.png',
  6: '/images/dice6.png',
};

const Dice = ({ value }) => {
  return (
    <div className={styles.diceWrapper}>
      <img 
        src={diceImages[value]} 
        alt={`Кубик с числом ${value}`} 
        className={styles.diceImage}
      />
    </div>
  );
};

export default Dice;
