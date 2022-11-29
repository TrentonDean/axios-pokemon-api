import React, {useState, useEffect} from "react"
import axios from "axios"

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([])

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response=>{setPokemon(response.data.results)})
        .catch((err) => console.log(err))
    },  []);

    return(
        <ul>
            {pokemon.map((pokemon, i) => {
                return(<li key={i}>{capitalizeFirstLetter(pokemon.name)}</li>)
            })}
        </ul>
    )
}

export default Pokemon