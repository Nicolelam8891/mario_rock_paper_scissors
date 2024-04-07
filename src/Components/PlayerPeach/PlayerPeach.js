import './PlayerPeach.css'

const PlayerPeach = ( {startGame} ) => {

  return (
    <main className='player-peach'>
      <h2 className='p-5 text-center font-bold player-title'>PEACH</h2>
      <div className='p-1 border-2 font-bold border-blue-300 shadow-md inline-block'>
      <img src="/peach.png" style={{ boxShadow: 'rgb(100 199 237) 0px 0px 10px inset' }} className='w-40 h-40 p-2' alt="peach" />
      </div>
      <p className='font-bold text-center score'>Score: </p>
    </main>
  )
}

export default PlayerPeach; 