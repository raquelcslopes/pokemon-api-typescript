import { useState } from "react";
import "./App.css";
import { PokemonCard } from "./pokemonCard";

import { PokemonSelect } from "./pokemonSelect";


export const pokemons: Array<Pokemon> = [
  {
    name: "Ivysaur",
    type: "FIRE",
    height: 10,
    ability: "limber",
    attack: 48,
    speed: 45,
  },
  {
    name: "Venusaur",
    type: "WATER",
    height: 10,
    ability: "imposter",
    attack: 89,
    speed: 45,
  },
  {
    name: "Bulbasaur",
    type: "FIRE",
    height: 10,
    ability: "limber",
    attack:90,
    speed: 45,
  },
  {
    name: "Pikachu",
    type: "ELETRIC",
    height: 10,
    ability: "limber",
    attack:90,
    speed: 45,
  },
  {
    name: "Charizard",
    type: "FIRE",
    height: 10,
    ability: "limber",
    attack:90,
    speed: 45
  },
  {
    name: "Blastoise",
    type: "FIRE",
    height: 10,
    ability: "limber",
    attack:90,
    speed: 45,
  },
  {
    name: "Flareon",
    type: "FIRE",
    height: 10,
    ability: "limber",
    attack:90,
    speed: 45
  },
];

export const App = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>();

  const handlePokemonSelected = (id: string) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const pokemon = mapApiPokemonToPokemon(data);
        setSelectedPokemon(pokemon);
      });
  };

  const mapApiPokemonToPokemon = (data: any): Pokemon => {
    return {
      name: data.name,
      height: data.height,
      type: data.types[0]?.type.name.toUpperCase(), 
      ability: data.abilities[0].ability.name,
      attack: data.stats[1].base_stat,
      speed: data.stats[5].base_stat,
    };
  };

  const backgroundImage = () => {
    switch (selectedPokemon?.name.toLowerCase()) {
      case "pikachu":
        return "https://pngimg.com/d/pokemon_PNG140.png";

      case "ivysaur":
        return "https://www.pngplay.com/wp-content/uploads/11/Ivysaur-Pokemon-Clip-Art-Transparent-PNG.png";

      case "charizard":
      return "https://upload.wikimedia.org/wikipedia/pt/9/95/Charizard.png";

      case "venusaur":
        return "https://www.pngplay.com/wp-content/uploads/12/Venusaur-Pokemon-PNG-Images-HD.png"

      case "bulbasaur":
        return "https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/800px-0001Bulbasaur.png"

      case "blastoise":
        return "https://assets.pokemon.com/assets/cms2/img/pokedex/full//009.png"

      case "flareon":
        return "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/136.png"

      default:
        return "https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
    }
  }
  

  return (
    <>
    <div id="containerLeft">
      <PokemonSelect
        pokemons={pokemons}
        onPokemonSelected={handlePokemonSelected}
      />

      <PokemonCard pokemon={selectedPokemon} />
    </div>
    <div id="containerRight">
      <img className="pokeApi" src="./img/poke.png" alt="pokeApi"></img>
      <img id="pokemonContainer"  src = {backgroundImage()} ></img>
      </div>
    </>
  );
};

export interface PokemonSelectorProps {
  pokemons: Array<Pokemon>;
  onPokemonSelected: (pokemonId: string) => void;
}

export interface Pokemon {
  name: string;
  type: string;
  height: number;
  ability: string;
  attack:  number;
  speed: number;
}

export interface PokemonCardProps {
  pokemon?: Pokemon;
}
