<template>
  <div class="flexbox">
    <PokeCard
      v-for="pokemon in pokemons"
      :key="pokemon"
      :name="pokemon.name.english"
      :id="pokemon.id"
      :type1="pokemon.type[0]"
      :type2="pokemon.type[1]"
      :sprite="pokemon.sprite"
    ></PokeCard>
  </div>
</template>

<script>
import PokeCard from "../components/PokeCard.vue";
import pokemons from "../assets/pokemon.json";

export default {
  setup() {
    return pokemons;
  },
  components: {
    PokeCard,
  },
};
</script>

<style>
.flexbox {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  text-align: center;
}
</style>
