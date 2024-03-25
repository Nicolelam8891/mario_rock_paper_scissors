import './PlayerPeach.css'

const PlayerPeach = () => {
  return (
    <main className='player-peach'>
      <h2 className='player-title'>PEACH</h2>
      <p className='score'>Score: </p>
      <div className='p-1 border-2 border-blue-300 shadow-md inline-block'>
      <img src="/peach.png" style={{ boxShadow: 'inset 0 0 10px #ed64a6' }} className='w-40 h-40 p-2' alt="peach" />
      </div>
    </main>
  )
}

export default PlayerPeach; 