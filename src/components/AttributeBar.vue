<template>
<div>
  <div class="name">
      {{name.charAt(0).toUpperCase() + name.slice(1)}}: {{getPercent()}}
  </div>
  <div class="progress-bar"><div class="green-bar" :style="{width: getPercent()}"></div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    getPercent() {
      return (Math.floor((this.current/this.max) * 100)) + "%"
    }
  },
  props: {
    name: String,
    max: Number,
    current: Number,
  },
};
</script>

<style scoped>
.name {
  text-align: center;
}
ol {
  list-style-type: none;
}
.progress-bar {
  width: 100%;
  max-width: 120px;
  border: 1px solid;
  border-color: var(--light-blue);
  height: 20px;
  margin: auto;
}
.green-bar {
  width: 0;
  background-color: var(--light-blue);
  height: 100%;
}
</style>
