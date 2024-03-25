import './GameBoard.css'

const GameBoard = () => {
  const handleClick = (mode) => {
  
  }

  return (
    <main className='games'>
      <div className='classic-game'>
        <button className='flex bg-blue-100 p-2 border-2 classic' onClick={() => handleClick()}>Classic Game</button>
        <button className='flex bg-blue-100 p-2 difficult' onClick={() => handleClick()}>Difficult Game</button>
      </div>

    </main>
  )
}

export default GameBoard;