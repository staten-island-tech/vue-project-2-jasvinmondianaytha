import { createStore } from "vuex";
import pokemons from "../assets/pokemon.json";

const pokedex = createStore({
  state: {
    pokedex: [],
  },
  getters: {
    testDex() {
      const testDex = Object.keys(pokemons).map((key) => [pokemons(key)]);
      return testDex;
    },
  },
  mutations: {
    changeGen() {},
  },
  actions: {},
});

export default pokedex;
