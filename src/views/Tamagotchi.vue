<template>
  <Tamagotchi-Card />
</template>

<script>
import { useTamagotchiStore } from "@/stores/tamagotchi.js";
import TamagotchiCard from "../components/Tamagotchi-Card.vue";

export default {
  setup() {
    const store = useTamagotchiStore();

    return { store };
  },
  components: {
    TamagotchiCard,
  },
};
</script>

<style></style>
