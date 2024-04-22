import { createContext, useEffect, useState } from "react"

export const PokemonesContext = createContext()

const PokemonesProvider = ({ children }) => {

  const [pokemones, setPokemones] = useState([])
  const [pokemonSelected, setPokemonSelected] = useState("")

  const getData = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=100000&offset=0"
    const response = await fetch(url)
    const data = await response.json()

    const dataArray = data.results.reduce((accumulator, currentValue) => {
      return accumulator.concat(currentValue.name)
    }, [])

    setPokemones(dataArray)
  }

  useEffect(() => {
    getData()
  }, [])

  const pokemonSelectedFunction = (e) => {
    setPokemonSelected(e)
  }

  const globalState = { pokemones, pokemonSelected, pokemonSelectedFunction }

  return (
    <PokemonesContext.Provider value={globalState}>
      {children}
    </PokemonesContext.Provider>
  )
}

export default PokemonesProvider