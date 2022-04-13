import { defineStore } from "pinia";
import { pokemons } from "@/assets/pokemon.json";

export const usePokedexStore = defineStore({
  id: "pokedex",
  state: () => ({
    pokemons: [],
    genSel: 0,
  }),
  getters: {
    gen() {
      switch (this.genSel) {
        case 0:
          return this.pokemons;
        case 1:
          return this.pokemons.slice(0, 151);
        case 2:
          return this.pokemons.slice(151, 251);
        case 3:
          return this.pokemons.slice(251, 386);
        case 4:
          return this.pokemons.slice(386, 493);
        case 5:
          return this.pokemons.slice(493, 649);
        case 6:
          return this.pokemons.slice(649, 721);
        case 7:
          return this.pokemons.slice(721, 809);
        case 8:
          return this.pokemons.slice(809, 905);

        default:
          return this.pokemons;
      }
    },
  },
  actions: {
    fetchAll() {
      this.pokemons = pokemons.map((pokemon) => pokemon);
    },
    setGen(n) {
      this.genSel = n;
    },
  },
});
