<template>
  <div class="generations">
    <input
      name="pick-gen"
      type="radio"
      id="gen1"
      value="Gen1"
      v-model="picked"
    />
    <label for="gen1">Gen 1</label>
    <br />
    <span>Picked: {{ picked }}</span>
  </div>
  <br />

  <!-- <div v-if="picked" class="pokebox">
    <Gen1></Gen1>
  </div> -->
  <div v-if="!picked" class="pokebox">
    <h1>You did something wrong</h1>

  </div>
</template>

<script>
import DexCard from "../components/DexCard.vue";
import pokemons from "../assets/pokemon.json";
import Gen1 from "../components/Gen1.vue";
export default {
  setup() {
    const pokedex = [];
    console.log(pokemons);
    const firstGen = pokemons.filter((maxDex) => 1 <= maxDex.id <= 151);
    return pokemons;
  },
  components: {
    DexCard,
    Gen1,
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
