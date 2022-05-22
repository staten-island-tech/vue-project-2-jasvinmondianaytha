<template>
  <div class="mon-img">
    <img :src="mon.sprite" alt="">
  </div>
  <div>
      <AttributeBar v-for="(item, key) in mon.attributes" :name="key" :current="item.current" :max="item.max" :key="item.current"/>
  </div>
</template>

<script>
import AttributeBar from './AttributeBar.vue'
export default {
  props: {
    mon: Object
  },
  components: {
    AttributeBar
  }
}
</script>

<style scoped></style>