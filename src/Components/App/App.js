import './App.css';
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import PlayerPeach from '../PlayerPeach/PlayerPeach';
import PlayerBowser from '../PlayerBowser/PlayerBowser';

function App() {
  const backgroundImage = {
    backgroundImage: `url('/mushroompalace.png')`, 
    backgroundSize: 'cover',
  }

  return (
    <main className="App flex justify-space-evenly bg-cover bg-no-repeat bg-center relative m-0 h-screen" style={backgroundImage}>
      <div className=>
        <PlayerPeach /> 
      </div>
      <div className='>
        <Header />
      </div>
      <div className=''>
        <PlayerBowser />
      </div>
    </main>
  );
}

export default App;
