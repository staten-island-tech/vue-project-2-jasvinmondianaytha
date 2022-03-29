<template>
  <div>
    <PokeCard
      v-for="pokemon in pokemons"
      :key="pokemon"
      :dex="pokemon.id"
      :type="pokemon.type"
      :sprite="pokemon.sprite"
    ></PokeCard>
  </div>
</template>

<script setup>
import PokeCard from "../components/PokeCard.vue";
import pokemons from "../assets/pokemon.json";
</script>

<style></style>
