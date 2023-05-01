import React, { useState, useEffect } from 'react';
import Card from "./components/card/Card";
import './app.css'
import Button from './components/styles/Button';


function App() {

  const [image, setImage] = useState(null);
  const [pokemon, setPokemon] = useState(null);

  async function getRandomPokemon() {

    const randomNumber = Math.floor(Math.random() * 898) + 1;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
    const data = await response.json();
    setPokemon(data);

    const speciesResponse = await fetch(data.species.url);
    const speciesData = await speciesResponse.json();
    setImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${speciesData.id}.png`);
  }

  return (   

    <div className="app">

    <div className="container">
        <Card pokemonData={pokemon} pokemonImg={image}/>
      </div>

      <Button className="btn" onClick={getRandomPokemon}>Capturar</Button>

    </div>
 

  );
}

export default App;
