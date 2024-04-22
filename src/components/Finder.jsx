import { useContext } from "react"
import { PokemonesContext } from "../context/PokemonesContext"
import { useNavigate } from "react-router-dom"

const Finder = () => {

  const { pokemones, pokemonSelected, pokemonSelectedFunction } = useContext(PokemonesContext)
  const navigate = useNavigate()

  const goToPokemonSelected = () => {
    navigate(`/pokemones/${pokemonSelected}`)
  }

  return (
    <section className="finder-container">
      <div className="d-flex flex-column align-items-center gap-3">
        <select className="text-center form-select" value={pokemonSelected} onChange={(e) => pokemonSelectedFunction(e.target.value)}>
          <option value="">Pokemones</option>
          {pokemones && pokemones.map((pokemon, index) => (
            <option key={Date.now() + index} value={pokemon}>{pokemon}</option>
          ))}
        </select>
        <button type="button" className="btn btn-dark" onClick={goToPokemonSelected} disabled={pokemonSelected === ""}>Ver Detalle</button>
      </div>
    </section>
  )
}

export default Finder