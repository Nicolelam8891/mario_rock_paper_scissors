
const Header = () => {
  return (
    <main className='header'>
      <div className="flex justify-content p-1">
        <img src="/toad.png" className="w-60 h-auto mx-auto p-2" alt= "Toad family" />
      </div>
        <h1 className='text-3xl font-bold text-center'>Mushroom Kingdom Showdown</h1>
        <p className='text-2xl font-bold text-center'>Choose your game mode!</p>
    </main>
  )
}

export default Header;

