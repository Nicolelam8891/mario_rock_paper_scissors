import React from 'react'; 
import bombIcon from '../../assets/bomb.png'
import shellIcon from '../../assets/shell.png'
import starIcon from '../../assets/star.png'
import coinIcon from '../../assets/coin.png'
import daisyIcon from '../../assets/daisy.png'


const Icons = ( {mode, determineWinner} ) => {

  const handleIconClick = (iconName) => {
    console.log(`${iconName} icon clicked!`)
    determineWinner(iconName)
    
  }

  return (
    <> 
      { mode === 'classic' ? 
    <div className='icon-container flex w-60 justify-center items-center space-x-20'>
     <button type="button" onClick={() => handleIconClick('bombIcon')}><img src={bombIcon} alt="Bomb icon"/></button>
     <button type="button" onClick={() => handleIconClick('shellIcon')}><img src={shellIcon} alt="Shell icon"/></button>
     <button type="button" onClick={() => handleIconClick('starIcon')}><img src={starIcon} alt="Star icon" /></button>
    </div>
      : 
    <div className='icon-container flex w-80 justify-center items-center space-x-20'>
      <button type="button" onClick={() => handleIconClick('bombIcon')}><img src={bombIcon} alt="Bomb icon" /></button>
      <button type="button" onClick={() => handleIconClick('shellIcon')}><img src={shellIcon} alt="Shell icon" /></button>
      <button type="button" onClick={() => handleIconClick('starIcon')}><img src={starIcon} alt="Star icon" /></button>
      <button type="button" onClick={() => handleIconClick('coinIcon')}><img src={coinIcon} alt="Coin Icon" /></button>
      <button type="button" onClick={() => handleIconClick('daisyIcon')}><img src={daisyIcon} alt="Daisy Icon" /></button>
    </div>
    }
    </>
  )
}

export default Icons; 