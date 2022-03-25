<template>
  <article class="pokemon-card">
    <div class="pokemon-container">
      <div class="poke-media-container">
        <img src="https://play.pokemonshowdown.com/sprites/gen1/abra.png" />
      </div>
      <pre class="poke-info-container">
<span class="type-fire">Abra</span> @ Choice Specs  
<span class="attr">Ability: </span>Water Absorb  
<span class="attr">EVs: </span><span class="stat-spa">252 SpA</span> / <span class="stat-spd">4 SpD</span> / <span class="stat-spe">252 Spe</span>  
Timid Nature  
<span class="attr">IVs: </span><span class="stat-atk">0 Atk</span>  
<span class="type-water">-</span> Steam Eruption  
<span class="type-fire">-</span> Flamethrower  
<span class="type-ground">-</span> Earth Power  
<span class="type-poison">-</span> Sludge Wave  
    </pre>
    </div>

    <div class="desc">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
      similique voluptatem exercitationem culpa, incidunt nam eos aut dolor
      tenetur ratione non inventore recusandae? Reiciendis optio recusandae ex
      dolor quia totam.
    </div>
    <button @click="getPokeName()">Get Names</button>
    <button @click="getPokeArray()">Get stats</button>
  </article>
</template>

<script>
import { ref, VueElement } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const result = ref(null);
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((response) => response.json())
      .then((data) => (result.value = data));
    console.log(result);
    return { result };
  },
  methods: {
    // gets pokemon 1-151 names
    async getPokeName() {
      const data = await this.result.results;
      data.forEach((element) => {
        console.log(element.name);
      });
    },
    // gets pokemon stat array
    async getPokeArray() {
      const data = await this.result.results;
      data.forEach((element) => {
        const stats = ref(null);
        fetch(element.url)
          .then((pokestat) => pokestat.json())
          .then((info) => (stats.value = info));
        console.log(stats);
      });
    },
  },
};
</script>

<style scoped>
.pokemon-card {
  display: flex;
  flex-direction: column;
}
.pokemon-container {
  display: flex;
}
.poke-media-container img {
  width: 15rem;
}
.desc {
  width: 16rem;
}
</style>
