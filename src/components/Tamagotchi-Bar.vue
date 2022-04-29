<template>
  <div id="greyBar">
    <div id="greenBar" :style="'width:' + percs">{{ name }}</div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
  props: {
    name: String,
    percs: String,
  },
};
</script>

<style scoped>
#greyBar {
  width: 100%;
  background-color: grey;
}

#greenBar {
  height: 30px;
  background-color: green;
}
</style>
