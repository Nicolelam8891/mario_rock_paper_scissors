import './App.css';
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import PlayerPeach from '../PlayerPeach/PlayerPeach';
import PlayerBowser from '../PlayerBowser/PlayerBowser';
import GameBoard from '../GameBoard/GameBoard';
import Player from './Player';

function App() {
  const backgroundImage = {
    backgroundImage: "url('/mushroompalace.png')", 
    backgroundSize: 'cover',
  }

  const handleClick = (event) => {
    // Check if the target of the click is a button
    if (event.target.tagName === 'BUTTON') {
      console.log('This number was clicked', event.target.textContent);
    }
  }
//set local state to two variables playerScore & computerScore, initial values are 0 
  const [playerScore, setPlayerScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)

  const updateScores = (winner) => {
    console.log('winner', winner)
    if (winner === 'player') {
      setPlayerScore(prevScore => prevScore + 1) 
    } else if (winner === 'computer') {
      setComputerScore(prevScore => prevScore + 1)
    }
  }

  return (
    <main className="App flex justify-space-evenly bg-cover bg-no-repeat bg-center relative m-0 h-screen" style={backgroundImage}>
      <div className='flex h-full left-sidebar'>
        <Player score={playerScore} name="peach"/>
  
        {/* <PlayerPeach playerScore={playerScore}/>  */}
      </div>
      <div className='flex-1 flex flex-col justify-center main-content'>
        <Header /> 
        <GameBoard updateScores={updateScores}/>
      </div>
      <div className='flex right-sidebar'>
        {/* <PlayerBowser computerScore={computerScore} /> */}
        <Player score={computerScore} name="bowser"/>

      </div>

    <div onClick={handleClick}>
      <button className="1">1</button>
      <button className="2">2</button>
      <button className="3">3</button>
    </div>
    
    </main>
  );
}

export default App;
