import React, { useState, useEffect } from 'react';
import './card.css'
import Button from '../styles/Button';
function Card ({ pokemonData, pokemonImg }){

    const [image, setImage] = useState(null);

    useEffect(() => {
        async function updatePokemonData() {
          const speciesResponse = await fetch(pokemonData.species.url);
          const speciesData = await speciesResponse.json();
          setImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${speciesData.id}.png`);
        }
        if (pokemonData) {
          updatePokemonData();
        }
      }, [pokemonData]);

      useEffect(() => {
        setImage(pokemonImg);
      }, [pokemonImg]);


    return(
        <div className="card">
            {pokemonData && (
                <>
                    <div className="poke-info">
                        <h1 className='title'>{pokemonData.name}</h1>
                        <Button>{pokemonData.stats.find(stat => stat.stat.name === "hp").base_stat}</Button>
                    </div>

                    <div className="img-container">
                        <img src={image} alt="" />
                    </div>

                    <div className="poke-battle">
                        <ul>
                            <li>
                                <h3>{pokemonData.stats[0].base_stat}</h3>
                                <p>Ataque</p>
                            </li>
                            <li>
                                <h3>{pokemonData.stats[1].base_stat}</h3>
                                <p>Defesa</p>
                            </li>
                            <li>
                                <h3>{pokemonData.stats[5].base_stat}</h3>
                                <p>Velocidade</p>
                            </li>
                        </ul>
                    </div>
                </>
            )}
        </div>
    )
}

export default Card;