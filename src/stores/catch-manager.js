import { defineStore } from "pinia";
import { Pokemon } from "@/js/generate-pokemon";
import { catchRates } from "@/assets/json/catch-rates";
import { useMessageStore } from "./message-log";

export const useCatchStore = defineStore({
  id: "catcher",
  state: () => ({
    pokemon: null,
    catchRate: null,
    angerCount: 0,
    eatCount: 0,
  }),
  actions: {
    genPokemon() {
      this.pokemon = new Pokemon(Math.floor(Math.random() * 151 + 1));
      this.catchRate = catchRates[this.pokemon.num - 1].rate;
      useMessageStore().pushMessage(`You encountered a ${this.pokemon.name.toUpperCase()}!`);
    },
    catchHandler() {
      if (this.catchCheck()) {
        useMessageStore().pushMessage(`You caught the ${this.pokemon.name.toUpperCase()}!`);
      } else {
        useMessageStore().pushMessage(
          `The ${this.pokemon.name.toUpperCase()} broke free of the POKéBALL!`
        );
      }
      this.monTurn();
    },
    catchCheck() {
      const R1 = Math.floor(Math.random() * 151);
      const F = 127;
      if (this.catchRate < R1) return false;
      const R2 = Math.floor(Math.random() * 256);
      if (R2 <= F) return true;
      return false;
    },
    throwRock() {
      if (this.catchRate * 2 > 255) {
        this.catchRate = 255;
      } else {
        this.catchRate = Math.floor(this.catchRate * 2);
      }
      const addAnger = Math.floor(Math.random() * 5 + 1);
      if (this.angerCount + addAnger > 255) {
        this.angerCount = 255;
      } else {
        this.angerCount += addAnger;
      }
      this.eatCount = 0;
      useMessageStore().pushMessage(`You threw a ROCK at the ${this.pokemon.name.toUpperCase()}!`);
      this.monTurn();
    },
    throwBait() {
      this.catchRate = Math.floor(this.catchRate / 2);
      const addEat = Math.floor(Math.random() * 5 + 1);
      if (this.eatCount + addEat > 255) {
        this.eatCount = 255;
      } else {
        this.eatCount += addEat;
      }
      this.angerCount = 0;
      useMessageStore().pushMessage(`You threw a BAIT at the ${this.pokemon.name.toUpperCase()}!`);
      this.monTurn();
    },
    monTurn() {
      let X = (this.pokemon.speed % 256) * 2;
      if (X > 255) {
        this.pokeRun();
        return;
      }
      if (this.angerCount > 0) {
        if (X * 2 > 255) {
          X = 255;
        } else {
          X = X * 2;
        }
      } else if (this.eatCount > 0) {
        X = X / 4;
      }
      const R = Math.floor(Math.random() * 256);
      if (R < X) {
        useMessageStore().pushMessage("The pokemon ran away!");
        this.pokeRun();
      }
    },
    pokeRun() {
      useMessageStore().pushMessage(`The ${this.pokemon.name.toUpperCase()} ran away...`);
      this.$reset;
      this.genPokemon();
    },
    runAway() {
      useMessageStore().pushMessage("You ran away...");
      this.$reset;
      this.genPokemon();
    },
  },
});
