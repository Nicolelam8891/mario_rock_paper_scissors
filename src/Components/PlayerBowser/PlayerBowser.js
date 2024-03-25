import './PlayerBowser.css'

const PlayerBowser = () => {
  return (
    <main className='player-bowser'>
      <h2 className='player-title'>BOWSER</h2>
      <p className='score'>Score: </p>
      <div className='p-1 border-2 border-blue-300 shadow-md inline-block'>
      <img src="/bowser.png" style={{ boxShadow: 'inset 0 0 10px #ed64a6' }}className='w-40 h-40 p-2' />
      </div>
    </main>
  )
}

export default PlayerBowser;