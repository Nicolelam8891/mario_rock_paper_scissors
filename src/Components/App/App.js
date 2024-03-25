import './App.css';
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';

function App() {
  const backgroundImage = {
    backgroundImage: `url('/mushroompalace.png')`, 
    backgroundSize: 'cover',
  }

  return (
    <main className="App bg-cover bg-no-repeat bg-center relative m-0 h-screen" style={backgroundImage}>
      <div className='main-content'>
        <Header />
      </div>
    </main>
  );
}

export default App;
