import React, { useState, useEffect } from 'react';
import Icons from '../Icons/Icons';


const GameBoard = () => {
  const [gameMode, setGameMode] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [winner, setWinner] = useState('')

  const choices = ['bomb', 'shell', 'star', 'coin', 'daisyFireball'];

    const startGame = (mode) => {
      setGameMode(mode);
      setGameStarted(true);
    }

    const renderGameMode = () => {
      if (!gameStarted) {
        return null; //when game hasn't started, don't render icons
      }
      switch (gameMode) {
        case 'classic': 
          return <Icons mode={'classic'} />;
        case 'difficult':
          return <Icons mode={'difficult'} />
        default:
          return null;
      }
    };

    //needs to have a parameter of mode and take in the argument of classic or difficult
    const computerResult = (mode='difficult') => {
      const randomIndex = Math.floor(Math.random() * choices.length)
      return choices[randomIndex];
    }


    const determineWinner = (playerChoice, computerChoice) => {
      const rules = {
        //[winner: losers]
        bomb: ['shell', 'daisy fireball'],
        shell: ['shell', 'star'],
        star: ['star', 'bomb'],
        coin: ['shell', 'star'],
        daisyFireball: ['coin', 'bomb']
      }
      if (playerChoice === computerChoice) {
        return `It's a draw!`
      }
      //rules[playerChoice] (if it is coin) = ['shell', 'star']
      if (rules[playerChoice].includes(computerChoice)) {
        //player wins
        return `Good work! Peach wins!`
      } else {
        //CPU wins
        return `Oh no! Bowser wins!`
      }
    }


  return (
    <main className='flex justify-center items-center h-screen'>
      {!gameStarted && (
      <div className='flex flex-col items-center justify-center p-4 h-full'>
        <button onClick={() => startGame('classic')} className='bg-blue-100 p-10 border-2 classic bg-opacity-50'>
          <div className='text-left'>
            <p className='text-center font-bold'>Classic Mode:</p>
            <img src='/classicGame.png' className='w-40' />
            <p className='m1-4 text-center font-bold'>Bomb beats Shell</p>
            <p className='m1-4 text-center font-bold'>Shell beats Star</p>
            <p className='m1-4 text-center font-bold'>Star beats Bomb</p>
          </div>
        </button>
        //user event is the onClick, startGame is the event handler
        <button onClick={() => startGame('difficult')}className='bg-blue-100 p-10 bg-opacity-50'>
          <div className='text-left'>
              <p className='text-center font-bold'>Difficult Mode:</p>
              <img src='/difficultGame.png' className='w-40' />
              <p className='m1-4 text-center font-bold'>Bomb beats Shell & Daisy Fireball</p>
              <p className='m1-4 text-center font-bold'>Shell beats Star & Coin</p>
              <p className='m1-4 text-center font-bold'>Star beats Bomb & Daisy Fireball</p>
              <p className='m1-4 text-center font-bold'>Coin beats Shell and Star</p>
              <p className='m1-4 text-center font-bold'>Daisy Fireball beats Coin and Bomb</p>
            </div>
        </button>
      </div>
      )}
      {renderGameMode()}
    </main>
  )
}
export default GameBoard;