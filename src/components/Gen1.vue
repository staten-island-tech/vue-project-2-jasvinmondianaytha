<template>
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
import DexCard from "./DexCard.vue";
import pokemons from "../assets/pokemon.json";
export default {
  setup() {
    return pokemons;
  },
  components: { DexCard },
};
</script>

<style></style>
