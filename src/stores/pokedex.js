import { defineStore } from "pinia";

const pokedexUrl = "https://pokeapi.co/api/v2";

export const usePokedexStore = defineStore({
  id: "pokedex",
  state: {
    pokemons: [],
  },
  actions: {
    async fetchAll() {
      const res = await fetch(`${pokedexUrl}/pokemon?limit=898&offset=0`);
      const data = await res.json();
      this.pokemons = data.map((pokemon) => pokemon);
      console.log("done");
    },
  },
});
