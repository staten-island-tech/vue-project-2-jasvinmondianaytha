<template>
  <figure class="card">
    <img class="image" :src="sprite" :alt="name">
    <figcaption class="name">{{name}}</figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    name: String,
    sprite: String
  }
}
</script>

<style scoped>
.card {
  text-align: center;
  background-color: #0c0117;
  width: fit-content;
  margin: auto;
  border: 1px solid;
  border-color: #d4ebff;
}
.image {
  width: 20rem;
  image-rendering: crisp-edges;
  image-rendering: pixelated;
}
.name {
  font-size: 1.5rem;
}
</style>