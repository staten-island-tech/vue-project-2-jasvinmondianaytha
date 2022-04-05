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
    <input
      name="pick-gen"
      type="radio"
      id="gen2"
      value="Gen2"
      v-model="picked"
    />
    <label for="gen2">Gen 2</label>
    <br />
    <span>Picked: {{ picked }}</span>
    <button @click="Gen1()">Gen1</button>
  </div>
  <div class="pokebox">
    <DexCard
      v-for="pokemon in pokemons"
      :key="pokemon"
      :name="pokemon.name.english"
      :id="pokemon.id"
      :sprite="pokemon.sprite"
    ></DexCard>
  </div>
</template>

<script>
import DexCard from "../components/DexCard.vue";
import pokemons from "../assets/pokemon.json";
export default {
  setup() {
    const pokedex = [];
    return pokedex, pokemons;
  },
  components: {
    DexCard,
  },
  methods: {
    Gen1() {
      this.pokedex.push(this.pokemons);
    },
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
