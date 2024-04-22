import pikachu from '../assets/img/pikachu.png'

const Home = () => {
  return (
    <main className='home-container text-center'>
      <h1>Bienvenido maestro pokemón</h1>
      <img src={pikachu} alt="Pikachu imagen" />
    </main>
  )
}

export default Home