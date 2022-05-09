<template>
  <div>
    <img :src="sprite" class="pokemon-sprite" />
    <Tamagotchi-Bar :percs="store.hungerBar" name="Hunger" />
    <Tamagotchi-Bar :percs="store.hygieneBar" name="Hygiene" />
    <Tamagotchi-Bar :percs="store.loveBar" name="Love" />
    <Tamagotchi-Bar :percs="store.funBar" name="Fun" />
    <Tamagotchi-Bar :percs="store.energyBar" name="Energy" />
  </div>
</template>

<script>
import { useTamagotchiStore } from "@/stores/tamagotchi.js";
import TamagotchiBar from "../components/Tamagotchi-Bar.vue";

export default {
  setup() {
    const store = useTamagotchiStore();
    if (store.hunger <= 100) {
      setInterval(() => {
        store.hungry();
      }, 5000);
    }
    if (store.happiness <= 100) {
      setInterval(() => {
        store.unhappy();
      }, 17500);
    }
    if (store.energy <= 100) {
      setInterval(() => {
        store.tired();
      }, 10000);
    }
    return { store };
  },
  components: {
    TamagotchiBar,
  },
  props: {
    sprite: String,
  },
};
</script>

<style></style>
