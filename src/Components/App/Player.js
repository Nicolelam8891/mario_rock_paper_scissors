import PlayerBowser from '../PlayerBowser/PlayerBowser'
import '../PlayerPeach/PlayerPeach.css'
import '../PlayerBowser/PlayerBowser.css'

//test
const Player = ( {score, name} ) => {
  console.log('score', score)
  console.log('name', name)
  return (
    <main className={`player-${name}`}>
      <img src={`/${name}.png`} style={{ boxShadow: 'rgb(100 199 237) 0px 0px 10px inset' }}className='w-40 h-40 p-2' />
      <p>{`I am ${name}`}</p>
    </main>
  )
}
export default Player 