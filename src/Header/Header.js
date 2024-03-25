
const Header = () => {
  return (
    <main className='header'>
        <h1 className='text-6xl -bold text-center text-blue-200 -mono p-2'>🍄 Mushroom Kingdom Showdown 🍄</h1>
      <div className="flex justify-content p-1">
        <img src="/toad.png" className="w-40 h-auto mx-auto p-2" alt= "Toad family" />
      </div>
        <p className='text-3xl -bold text-center text-blue-500 -serif'><em>Choose your game mode!</em></p>
    </main>
  )
}

export default Header;

