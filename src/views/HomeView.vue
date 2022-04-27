<script>
export default {
  data() {
    let width = 100;
    return { width };
  },
  computed: {
    computedWidth: function () {
      return this.width.toString() + "%";
    },
  },
  methods: {
    hungry: function () {
      setInterval(() => {
        if (this.width <= 100) {
          this.width = this.width - 20;
        } else if (this.width === 0) {
          return;
        }
      }, 1000);
    },
    full: function () {
      setInterval(() => {
        if (this.width < 100) {
          this.width = this.width + 20;
        } else if (this.width === 100) {
          return;
        }
      }, 1000);
    },
  },
};
</script>

<template>
  <div id="greyBar">
    <div id="greenBar" v-bind:style="{ width: computedWidth }">Hunger Bar</div>
  </div>
  <button @click="hungry">Get hungry</button>
  <button @click="full">Get full</button>
</template>

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
