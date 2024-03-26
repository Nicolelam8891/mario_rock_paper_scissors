import React from 'react';

import bombIcon from '../../assets/bomb.png'
import shellIcon from '../../assets/shell.png'
import starIcon from '../../assets/star.png'

const ClassicMode= ({ onSelection }) => {
  return (
    <div className='icon-container flex justify-center items-center space-x-4'>
      <img src={bombIcon} alt="Bomb icon" onClick={() => onSelection('bomb')} />
      <img src={shellIcon} alt="Shell icon" onClick={() => onSelection('shell')} />
      <img src={starIcon} alt="Star icon" onClick={() => onSelection('star')} />
    </div>
  )
}

export default ClassicMode