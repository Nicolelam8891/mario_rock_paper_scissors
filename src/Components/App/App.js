import './App.css';
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import PlayerPeach from '../PlayerPeach/PlayerPeach';
import PlayerBowser from '../PlayerBowser/PlayerBowser';
import GameBoard from '../GameBoard/GameBoard';
import ClassicIcons from '../GameModeIcons/ClassicIcons';

function App() {
  const backgroundImage = {
    backgroundImage: `url('/mushroompalace.png')`, 
    backgroundSize: 'cover',
  }

  return (
    <main className="App flex justify-space-evenly bg-cover bg-no-repeat bg-center relative m-0 h-screen" style={backgroundImage}>
      <div className='flex h-full left-sidebar'>
        <PlayerPeach /> 
      </div>
      <div className='flex-1 flex flex-col justify-center main-content'>
        <Header /> 
        <GameBoard />
      </div>
      <div className='flex right-sidebar'>
        <PlayerBowser />
      </div>
    </main>
  );
}

export default App;
