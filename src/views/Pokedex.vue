<template>
  <div class="generations">
    <input name="pick-gen" type="radio" id="gen1" value="Gen1" v-model="gen" />
    <label for="gen1">Gen 1</label>
    <br />
    <span>Picked: {{ gen }}</span>
  </div>
  <br />

  <div v-if="gen" class="pokebox">
    <Gen1></Gen1>
  </div>
  <div v-if="!gen" class="pokebox">Select a gen</div>
</template>

<script>
import DexCard from "../components/DexCard.vue";
import pokemons from "../assets/pokemon.json";
import Gen1 from "../components/Gen1.vue";
import { useStore } from "vuex";
export default {
  setup() {
    return pokemons;
  },
  components: {
    DexCard,
    Gen1,
  },
  data() {
    return {
      gen: null,
    };
  },
  computed: {
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
