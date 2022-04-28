<template>
  <Tamagotchi-Bar :percs="store.hunger" />
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
      }, 1000);
    }
    return { store };
  },
  components: {
    TamagotchiBar,
  },
};
</script>

<style>
#greyBar {
  width: 100%;
  background-color: grey;
}

#greenBar {
  height: 30px;
  background-color: green;
}
</style>
