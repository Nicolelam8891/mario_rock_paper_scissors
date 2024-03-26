import React from 'react';
import bombIcon from '../../assets/bomb.png'
import shellIcon from '../../assets/shell.png'
import starIcon from '../../assets/star.png'

const ClassicIcons = () => {
  return (
    <div className='icon-container flex w-60 justify-center items-center space-x-20'>
      <img src={bombIcon} alt="Bomb icon" />
      <img src={shellIcon} alt="Shell icon" />
      <img src={starIcon} alt="Star icon" />
    </div>
  )
}

export default ClassicIcons