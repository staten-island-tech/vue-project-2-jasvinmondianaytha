<template>
  <h1 v-if="!gen" class="pokebox">Select a gen</h1>
  <div class="generations">
    <input name="pick-gen" type="radio" id="gen1" value="Gen 1" v-model="gen" />
    <label for="gen1">Gen 1</label>
    <br />
    <span v-if="gen">Selected {{ gen }}</span>
  </div>
  <br />
  <div v-if="gen" class="pokebox">
    <Gen1></Gen1>
  </div>
  <button class="test" @click="Gen1()">TEST</button>
</template>

<script>
import DexCard from "../components/DexCard.vue";
import pokemons from "../assets/pokemon.json";
import Gen1 from "../components/Gen1.vue";
export default {
  setup() {
    console.log(pokemons.pokemons);
    return pokemons;
  },
  components: {
    DexCard,
    Gen1,
  },
  data() {
    const gen1mons = this.pokemons.filter((pokemon) => pokemon.id < 152);
    console.log(gen1mons);
    return {
      gen: null,
    };
  },
  methods: {
    Gen1() {},
  },
};
</script>

<style>
.pokebox {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  text-align: center;
}
</style>
