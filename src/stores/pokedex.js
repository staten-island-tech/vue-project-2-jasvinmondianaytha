import { createStore } from "vuex";
import pokemons from "../assets/pokemon.json";

const pokedex = createStore({
  state: {
    pokemon: [],
  },
});
