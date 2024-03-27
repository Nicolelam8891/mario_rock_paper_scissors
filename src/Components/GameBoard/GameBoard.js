import React, { useState, useEffect } from 'react';
import ClassicIcons from '../Icons/ClassicIcons';
import DifficultIcons from '../Icons/DifficultIcons';
import Icons from '../Icons/Icons';


const GameBoard = () => {
  const [gameMode, setGameMode] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);

    const startGame = (gameMode) => {
      setGameMode(gameMode);
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

  // const determineWinner = (playerChoice, computerChoice) => {
  //   const rules = {
  //     bomb: ['shell', 'daisy fireball'], 
  //     shell: ['star', 'coin'], 
  //     star: ['bomb', 'daisy fireball'],
  //     coin: ['shell', 'star'],
  //     daisyFireball: ['coin', 'bomb']
  //   }
  //   if (playerChoice === computerChoice) {
  //     return `It's a draw!`
  //   }

  //   if (rules[playerChoice].includes(computerChoice)) {
  //     return `Good work! Peach wins!`
  //   } else {
  //     return `Bowser wins!`;
  //   }
  // }

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