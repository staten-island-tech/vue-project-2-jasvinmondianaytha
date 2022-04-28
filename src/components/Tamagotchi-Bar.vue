<template>
  <div id="greyBar">
    <div id="greenBar" v-bind:style="{ width: percs }">Hunger Bar</div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
  props: {
    percs: Number,
  },
};
</script>

<style></style>
