<template>
<div class="indet">
  <div class="mon-img-wrapper">
    <img class="mon-img" :src="mon.sprite" alt="">
  </div>
  <div class="attributes">
    <AttributeBar name="fullness" :current="mon.attributes.fullness.current" :max="mon.attributes.fullness.max"/>
    <AttributeBar name="hygiene" :current="mon.attributes.hygiene.current" :max="mon.attributes.hygiene.max"/>
    <AttributeBar name="love" :current="mon.attributes.love.current" :max="mon.attributes.love.max"/>
    <AttributeBar name="fun" :current="mon.attributes.fun.current" :max="mon.attributes.fun.max"/>
    <AttributeBar class="energy" name="energy" :current="mon.attributes.energy.current" :max="mon.attributes.energy.max"/>
  </div>
  <div class="button" id="feed">
    <button @click="store.feed(id)">FEED</button>
  </div>
  <div class="button" id="play">
    <button @click="store.play(id)">PLAY</button>
  </div>
  <div class="button" id="train">
    <button @click="store.train(id)">TRAIN</button>
  </div>
  <div class="button" id="clean">
    <button @click="store.clean(id)">CLEAN</button>
  </div>
  <div class="release" id="clean">
    <button @click="store.release(id)">RELEASE</button>
  </div>
</div>
  
</template>

<script>
import {useBoxStore} from "@/stores/box-store";
import AttributeBar from './AttributeBar.vue';
export default {
  setup() {
    const store = useBoxStore();
    return {store}
  },
  props: {
    mon: Object,
    id: Number,
  },
  components: {
    AttributeBar
  }
}
</script>

<style scoped>
.indet {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px; 
  height: 100%;
  width: 100%;
}
.mon-img {
  width: 20rem;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
}
.mon-img-wrapper {
  margin:auto;
  width: fit-content;
  border: 1px solid;
  grid-area: 1 / 2 / 3 / 4;
  border-color: var(--light-blue);
}
.attributes {
  grid-area: 3 / 2 / 4 / 4;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px; 
}
.energy {
  grid-area: 3 / 1 / 4 / 3;
}
.button {
  display: flex;
  align-items: center;
  justify-content: center;
}
button {
  border: 1px solid;
  border-color: var(--light-blue);
  color: var(--light-blue);
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  padding-top: 8px;
  padding-right: 10px;
  padding-bottom: 8px;
  padding-left: 10px;
  text-align: center;
  font-size: 1.5rem;
  width: 10rem;
  font-weight: 700;
}
button:hover {
  background-color: var(--light-blue);
  color: white;
}
.release {
  display: flex;
  align-items: flex-end;
  justify-content: bottom;
}
.release button {
  width: fit-content;
}
@media (max-width: 501px) {
  .mon-img-wrapper {
    grid-area: 1 / 1 / 3 / 3;
  }
}
@media (max-width: 413px) {

.mon-img-wrapper {
    display: flex;
    justify-content: start;
    margin-top: 0;
    margin-left: 0;
  }
  .mon-img {
    width: 12rem;
    display: flex;
  }
  .button {
    width: 9rem;
    margin: 1rem;
  }
  .attributes {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    grid-area: 2 / 1 / 3 / 3;
  }
}
</style>