import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const DetailsCard = () => {

  const { id } = useParams()
  const [pokemonData, setPokemonData] = useState("")

  const getPokemonSelectedData = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const response = await fetch(url)
    const data = await response.json()
    setPokemonData(data)
  }

  useEffect(() => {
    getPokemonSelectedData()
  }, [])

  return (
    <section className="details-card-container">
      <div className="card mb-3" style={{ maxWidth: 540 + 'px' }}>
        <div className="row g-0">
          <div className="col-md-7 d-flex align-content-center">
            {pokemonData && (
              <img src={pokemonData && pokemonData.sprites.other['official-artwork'].front_default} className="img-fluid rounded-start w-100" alt={`Imagen ${pokemonData.name}`} />
            )}
          </div>
          <div className="col-md-5">
            <div className="card-body">
              <h5 className="card-title">{pokemonData && pokemonData.name}</h5>
              <ul>
                {pokemonData && pokemonData.stats.map((stat, index) => (
                  <li key={Date.now() + index}>{stat.stat.name}: {stat.base_stat}</li>
                ))}
              </ul>
              <div className="type-container d-flex gap-3">
                {pokemonData && pokemonData.types.map((type, index) => (
                  <p className="card-text" key={Date.now() + index}><small className="text-body-secondary">{type.type.name}</small></p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailsCard