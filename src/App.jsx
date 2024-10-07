import React, { useState } from 'react';
import './App.css';

// Import your dice images
import dice1 from './assets/dice1.png';
import dice2 from './assets/dice2.png';
import dice3 from './assets/dice3.png';
import dice4 from './assets/dice4.png';
import dice5 from './assets/dice5.png';
import dice6 from './assets/dice6.png';

const App = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [uri, setUri] = useState('');

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const setDiceImage = () => {
    const randomNum = getRandomNumber();
    setRandomNumber(randomNum);
    
    switch (randomNum) {
      case 1:
        setUri(dice1);
        break;
      case 2:
        setUri(dice2);
        break;
      case 3:
        setUri(dice3);
        break;
      case 4:
        setUri(dice4);
        break;
      case 5:
        setUri(dice5);
        break;
      case 6:
        setUri(dice6);
        break;
      default:
        setUri('');
    }
  };

  return (
    <div className="container">
      <h1 className="dice-text">YOUR NUMBER IS '{randomNumber}'</h1>
      {uri && <img className="dice-image" src={uri} alt={`Dice ${randomNumber}`} />}
      <button className="roll-button" onClick={setDiceImage}>
        ROLL DICE
      </button>
    </div>
  );
};

export default App;
