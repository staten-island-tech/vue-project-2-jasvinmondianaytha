<script setup>
import PokemonImage from "./PokemonImage.vue";
import StatForm from "./StatForm.vue";
</script>

<template>
  <section class="wrapper">
    <div>
      <div class="pokemon-wrapper">
        <label for="pokemon">Pokémon</label>
        <input type="text" name="pokemon" id="pokemon" />
      </div>
      <div class="moves-wrapper">
        <label>Moves</label>
        <div class="cell" v-for="n in 4" :key="n">
          <input type="text" :name="'move' + n.toString()" />
        </div>
      </div>
    </div>
    <div class="mid-grid">
      <div class="top-wrapper">
        <div class="item-wrapper">
          <label>Item</label>
          <div>
            @
            <input type="text" name="item" id="item" />
          </div>
        </div>
        <div class="ability-wrapper">
          <label>Ability</label>
          <input type="text" name="ability" id="ability" />
        </div>
        <PokemonImage />
      </div>
      <div class="stats-wrapper">
        <StatForm />
      </div>
    </div>
  </section>
</template>
