import React, { useState, useEffect } from 'react';
import Icons from '../Icons/Icons';


const GameBoard = () => {
  const [gameMode, setGameMode] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [winner, setWinner] = useState('')

  const difficultChoice = ['bombIcon', 'shellIcon', 'starIcon', 'coinIcon', 'daisyFireballIcon'];
  const classicChoice = ['bombIcon', 'shellIcon', 'starIcon']

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
          return <Icons mode={'classic'} determineWinner={determineWinner} />;
        case 'difficult':
          return <Icons mode={'difficult'} determineWinner={determineWinner} />
        default:
          return null;
      }
    };

    //needs to have a parameter of mode and take in the argument of classic or difficult
    const computerResult = (mode) => {
      if (mode === 'classic') {
        const randomIndex = Math.floor(Math.random() * classicChoice.length)
          return classicChoice[randomIndex]
      } else {
        const randomIndex = Math.floor(Math.random() * difficultChoice.length)
          return difficultChoice[randomIndex]
      }
    }


    const determineWinner = (playerChoice) => {
      let computerChoice = computerResult(gameMode)
      console.log('computerChoice', computerChoice)
      let rules = {}
      if (gameMode === 'classic') {
        rules = {
          bombIcon: ['shellIcon'],
          shellIcon: ['starIcon'],
          starIcon: ['bombIcon'], 
        }
       } else {
        rules = {
            //[winner: losers]
            bombIcon: ['shellIcon', 'daisy fireballIcon'],
            shellIcon: ['shellIcon', 'starIcon'],
            starIcon: ['starIcon', 'bombIcon'],
            coinIcon: ['shellIcon', 'starIcon'],
            daisyFireballIcon: ['coinIcon', 'bombIcon']
          }
        }      
      if (playerChoice === computerChoice) {
        console.log(`It's a draw!`);
        setWinner('draw')
      } else if (rules[playerChoice].includes(computerChoice)) {
        //rules[playerChoice] (if it is coin) = ['shell', 'star']
        console.log(`Good work! Peach wins!`);
        setWinner('player')
      } else {
        //CPU wins
        console.log(`Oh no! Bowser wins!`);
        setWinner('computer');
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
        <button onClick={() => startGame('difficult')} className='bg-blue-100 p-10 bg-opacity-50'>
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