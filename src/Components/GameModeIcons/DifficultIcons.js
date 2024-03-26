import React from 'react'; 
import bombIcon from '../../assets/bomb.png'
import shellIcon from '../../assets/shell.png'
import starIcon from '../../assets/star.png'
import coinIcon from '../../assets/coin.png'
import daisyIcon from '../../assets/daisy.png'

const DifficultIcons = () => {
  return (
    <div className='icon-container flex w-60 justify-center items-center space-x-20'>
      <img src={bombIcon} alt="Bomb icon" />
      <img src={shellIcon} alt="Shell icon" />
      <img src={starIcon} alt="Star icon" />
      <img src={coinIcon} alt="Coin Icon" />
      <img src={daisyIcon} alt="Daisy Icon" />
    </div>
  )
}

export default DifficultIcons; 