import React, { useEffect } from 'react'; 
import bombIcon from '../../assets/bombIcon.png'
import shellIcon from '../../assets/shellIcon.png'
import starIcon from '../../assets/starIcon.png'
import coinIcon from '../../assets/coinIcon.png'
import daisyIcon from '../../assets/daisyIcon.png'


const Icons = ( {mode, determineWinner} ) => {
  console.log('Icons mode prop', mode)

  const handleIconClick = (iconName) => {
    console.log(`${iconName} icon clicked!`)
    determineWinner(iconName)
    
  }
  useEffect(() => {
    console.log('useEffectmode', mode)
  }, [mode])

  return (
    <div className='icon-container flex justify-center items-center space-x-20'>
      <button type="button" className="w-60 h-60" onClick={() => handleIconClick('bombIcon')}><img src={bombIcon} alt="Bomb icon"/></button>
      <button type="button" className="w-40 h-40" onClick={() => handleIconClick('shellIcon')}><img src={shellIcon} alt="Shell icon"/></button>
      <button type="button" className="w-40 h-40" onClick={() => handleIconClick('starIcon')}><img src={starIcon} alt="Star icon" /></button>
      {mode !== 'classic' && (
      <>
          <button type="button" className="w-40 h-40" onClick={() => handleIconClick('coinIcon')}><img src={coinIcon} alt="Coin icon" /></button>
          <button type="button" className="w-60 h-60" onClick={() => handleIconClick('daisyIcon')}><img src={daisyIcon} alt="Daisy icon" /></button>
      </>
      )}
    </div>
  );
};

export default Icons; 

