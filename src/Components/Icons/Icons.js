import React from 'react'; 
import bombIcon from '../../assets/bomb.png'
import shellIcon from '../../assets/shell.png'
import starIcon from '../../assets/star.png'
import coinIcon from '../../assets/coin.png'
import daisyIcon from '../../assets/daisy.png'


const Icons = ( {mode, determineWinner} ) => {
  console.log('Icons mode prop', mode)
  const handleIconClick = (iconName) => {
    console.log(`${iconName} icon clicked!`)
    determineWinner(iconName)
    
  }

  return (
    <div className='icon-container flex justify-center items-center space-x-20'>
      <button type="button" className="w-40 h-40" onClick={() => handleIconClick('bombIcon')}><img src={bombIcon} alt="Bomb icon"/></button>
      <button type="button" className="w-40 h-40" onClick={() => handleIconClick('shellIcon')}><img src={shellIcon} alt="Shell icon"/></button>
      <button type="button" className="w-40 h-40" onClick={() => handleIconClick('starIcon')}><img src={starIcon} alt="Star icon" /></button>
      {mode !== 'classic' && (
        <div>
          <button type="button" className="w-40 h-40" onClick={() => handleIconClick('coinIcon')}><img src={coinIcon} alt="Coin icon" /></button>
          <button type="button" className="w-40 h-40" onClick={() => handleIconClick('daisyIcon')}><img src={daisyIcon} alt="Daisy icon" /></button>
        </div>
      )}
    </div>
  );
};

export default Icons; 

// return (
//   <main>
//       { mode === 'classic' ? (
//     <div className='icon-container flex w-80 justify-center items-center space-x-20'>
//       <button type="button" onClick={() => handleIconClick('bombIcon')}><img src={bombIcon} alt="Bomb icon"/></button>
//       <button type="button" onClick={() => handleIconClick('shellIcon')}><img src={shellIcon} alt="Shell icon"/></button>
//       <button type="button" onClick={() => handleIconClick('starIcon')}><img src={starIcon} alt="Star icon" /></button>
//     </div>
//       ) : (
//     <>
//       <button className="w-60 flex justify-center items-center space-x-20" type="button" onClick={() => handleIconClick('bombIcon')}><img src={bombIcon} alt="Bomb icon"/></button>
//       <button className="w-60 flex justify-center items-center space-x-20" type="button" onClick={() => handleIconClick('shellIcon')}><img src={shellIcon} alt="Shell icon"/></button>
//       <button className="w-60 flex justify-center items-center space-x-20" type="button" onClick={() => handleIconClick('starIcon')}><img src={starIcon} alt="Star icon" /></button>
//       <button className="w-60 flex justify-center items-center space-x-20" type="button" onClick={() => handleIconClick('coinIcon')}><img src={coinIcon} alt="Coin icon" /></button>
//       <button className="w-60 flex justify-center items-center space-x-20" type="button" onClick={() => handleIconClick('daisyIcon')}><img src={daisyIcon} alt="Daisy icon" /></button>
//     </>
//       )}
//   </main> 
// )
// }

// const Icons = ({ mode, determineWinner }) => {
//   const handleIconClick = (iconName) => {
//     console.log(`${iconName} icon clicked!`);
//     // Call the determineWinner function with iconName if uncommented
//     // determineWinner(iconName);
//   }

//   return (
//     <>
//       {mode === 'classic' ? (
//         <div className='icon-container flex w-80 justify-center items-center space-x-20'>
//           <button type="button" onClick={() => handleIconClick('bombIcon')}><img src={bombIcon} alt="Bomb icon"/></button>
//           <button type="button" onClick={() => handleIconClick('shellIcon')}><img src={shellIcon} alt="Shell icon"/></button>
//           <button type="button" onClick={() => handleIconClick('starIcon')}><img src={starIcon} alt="Star icon" /></button>
//         </div>
//       ) : (
//         <div className='icon-container flex w-80 justify-center items-center space-x-20'>
//           <button type="button" onClick={() => handleIconClick('bombIcon')}><img src={bombIcon} alt="Bomb icon"/></button>
//           <button type="button" onClick={() => handleIconClick('shellIcon')}><img src={shellIcon} alt="Shell icon"/></button>
//           <button type="button" onClick={() => handleIconClick('starIcon')}><img src={starIcon} alt="Star icon" /></button>
//           <button type="button" onClick={() => handleIconClick('coinIcon')}><img src={coinIcon} alt="Coin icon" /></button>
//           <button type="button" onClick={() => handleIconClick('daisyIcon')}><img src={daisyIcon} alt="Daisy icon" /></button>
//         </div>
//       )}
//     </>
//   );
// }

// export default Icons;
