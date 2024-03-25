import './GameBoard.css'

const GameBoard = () => {


  return (
    <main className='flex justify-center items-center h-screen'>
      <div className='flex flex-col items-center justify-center p-4 h-full'>
        <button className='bg-blue-100 p-10 border-2 classic'>
          <div className='text-left'>
            <p className='text-center'>Classic Game:</p>
            <img src='/classicGame.png' className='w-40' />
            <p className='m1-4 text-center'>Bomb beats Shell</p>
            <p className='m1-4 text-center'>Shell beats Star</p>
            <p className='m1-4 text-center'>Star beats Bomb</p>
          </div>
        </button>
          
        <button className='bg-blue-100 p-10 difficult'>
          <div className='text-left'>
              <p className='text-center'>Classic Game:</p>
              <img src='/difficultGame.png' className='w-40' />
              <p className='m1-4 text-center'>Bomb beats Shell & Daisy Fireball</p>
              <p className='m1-4 text-center'>Shell beats Star & Coin</p>
              <p className='m1-4 text-center'>Star beats Bomb & Daisy Fireball</p>
              <p className='m1-4 text-center'>Coin beats Shell and Star</p>
              <p className='m1-4 text-center'>Daisy Fireball beats Coin and Bomb</p>
            </div>
        
        </button>
      </div>
    </main>
  )
}

export default GameBoard;