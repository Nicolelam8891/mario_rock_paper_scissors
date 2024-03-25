import './PlayerBowser.css'

const PlayerBowser = () => {
  return (
    <main className='player-bowser'>
      <h2 className='p-5 text-center font-bold player-title'>BOWSER</h2>
      <div className='p-1 border-2 border-blue-300 shadow-md inline-block'>
      <img src="/bowser.png" style={{ boxShadow: 'rgb(100 199 237) 0px 0px 10px inset' }}className='w-40 h-40 p-2' />
      </div>
      <p className='font-bold text-center score'>Score: </p>
    </main>
  )
}

export default PlayerBowser;