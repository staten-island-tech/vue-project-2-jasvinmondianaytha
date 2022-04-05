<template>
  <button @click="handleClick1">Generation 1</button>
  <button @click="handleClick2">Generation 2</button>
  <button @click="handleClick3">Generation 3</button>
  <button @click="handleClick4">Generation 4</button>
  <button @click="handleClick5">Generation 5</button>
  <button @click="handleClick6">Generation 6</button>
  <button @click="handleClick7">Generation 7</button>
  <button @click="handleClick8">Generation 8</button>
</template>

<script>
import PokeCard from "../components/PokeCard.vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const handleClick1 = () => {
      router.push("/gen1");
    };
    const handleClick2 = () => {
      router.push("/gen2");
    };
    const handleClick3 = () => {
      router.push("/gen3");
    };
    const handleClick4 = () => {
      router.push("/gen4");
    };
    const handleClick5 = () => {
      router.push("/gen5");
    };
    const handleClick6 = () => {
      router.push("/gen6");
    };
    const handleClick7 = () => {
      router.push("/gen7");
    };
    const handleClick8 = () => {
      router.push("/gen8");
    };
    return {
      handleClick1,
      handleClick2,
      handleClick3,
      handleClick4,
      handleClick5,
      handleClick6,
      handleClick7,
      handleClick8,
      router,
    };
  },
  components: {
    PokeCard,
  },
};
</script>

<style>
button {
  margin: 2rem;
}
</style>
