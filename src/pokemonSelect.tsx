import { PokemonSelectorProps } from "./App";
import { Pokemon } from "./App";

export const PokemonSelect = (props: PokemonSelectorProps) => {
  return (
    <div>
      <img ></img>
      <select
        onChange={(e) => {
          props.onPokemonSelected(e.target.value);
        }}
      >
        {props.pokemons.map((p) => (
          <option>
            {p.name}
          </option>
        ))}
      </select>
    </div>
  );
};