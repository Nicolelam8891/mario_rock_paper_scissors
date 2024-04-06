import React, { useState, useEffect } from 'react';
import Icons from '../Icons/Icons';
import bombIcon from '../../assets/bombIcon.png'
import shellIcon from '../../assets/shellIcon.png'
import starIcon from '../../assets/starIcon.png'
import coinIcon from '../../assets/coinIcon.png'
import daisyIcon from '../../assets/daisyIcon.png'

const GameBoard = () => {
  const [gameMode, setGameMode] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [winner, setWinner] = useState('')

  const difficultChoice = ['bombIcon', 'shellIcon', 'starIcon', 'coinIcon', 'daisyFireballIcon'];
  const classicChoice = ['bombIcon', 'shellIcon', 'starIcon']

  const iconImages = {
    bombIcon: bombIcon,
    shellIcon: shellIcon,
    starIcon: starIcon,
    coinIcon: coinIcon,
    daisyFireballIcon: daisyIcon, 
  };

    const startGame = (mode) => {
      console.log('Game mode selected', mode)
      setGameMode(mode);
      setGameStarted(true);
    }

    const renderGameMode = () => {
      if (!gameStarted || winner) {
        return null; //do not render game mode icons
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

      setPlayerChoice(playerChoice);
      setComputerChoice(computerChoice);

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

    const renderIcon = (choice) => {
      const IconImage = iconImages[choice];
      return IconImage ? <img src={IconImage} alt={`${choice}`} className='w-60 h-60 ' /> : null;
    };

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

{/* Winner Announcement */}
{gameStarted && (
  <div className='winner-announcement text-5xl font-bold text-blue-200 flex flex-col justify-center items-center'>
    {/* Winner message container */}
    <div className='winner-message-container my-4'>
      {winner === 'draw' && <p>It's a draw! You both chose:</p>}
      {winner === 'player' && <p>Good work! Peach wins!</p>}
      {winner === 'computer' && <p>Oh no! Bowser wins!</p>}
    </div>
    
    {/* Icons container */}
    <div className='icons-container flex justify-center items-center space-x-20'>
      {winner === 'draw' && renderIcon(playerChoice)}
      {(winner === 'player' || winner === 'computer') && (
        <>
          {renderIcon(playerChoice)}
          {renderIcon(computerChoice)}
        </>
      )}
    </div>
  </div>
)}
</main>

  )
}
export default GameBoard;