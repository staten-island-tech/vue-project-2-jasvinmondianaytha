import { createStore } from "vuex";
import pokemons from "../assets/pokemon.json";

const pokedex = createStore({
  state: {
    pokedex: [],
  },
  computed: {
    filledPokedex() {
      const maxDex = this.pokedex.push(this.pokemons);
      return maxDex;
    },
    Gen1() {
      const firstGen = this.maxDex.filter((maxDex) => 1 <= maxDex.id <= 151);
    },
  },
  mutations: {},
  actions: {},
});

export default pokedex;
