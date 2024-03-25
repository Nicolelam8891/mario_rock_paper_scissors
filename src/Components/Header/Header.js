import './Header.css'

const Header = () => {
  return (
    <main className='header'>
        <h1 className='text-5xl font-bold text-center text-blue-200 shadow-md font-mono p-2 title-outline'>🍄 MUSHROOM KINGDOM SHOWDOWN 🍄</h1>
      <div className="flex justify-center p-1">
        <img src="/toad.png"
 className="w-40 h-auto mx-auto p-2" alt= "Toad family" />
      </div>
        <p className='text-2xl font-bold text-center title-outline text-blue-400 font-mono'><em>Choose your game mode!</em></p>
    </main>
  )
}

export default Header;

