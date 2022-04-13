<script setup>
defineProps({
  attr: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <tr class="row">
    <td>
      <label id="label-{{attr}}" for="{{attr}}">{{ attr.toUpperCase() }}</label>
    </td>
    <td>
      <span id="{{attr}}-base" class="base">12</span>
    </td>
    <td>
      <input
        type="number"
        min="0"
        max="31"
        name="{{attr}}-iv"
        id="{{attr}}-iv"
        class="ev"
        value="31"
      />
    </td>
    <td>
      <input
        type="number"
        min="0"
        max="252"
        name="{{attr}}-ev"
        id="{{attr}}-ev"
        class="ev"
      />
    </td>
    <td>
      <output id="{{attr}}-nature" class="nature">+</output>
    </td>
    <td>
      <output id="{{attr}}-value" class="value">234</output>
    </td>
  </tr>
</template>

<style scoped>
.row {
  margin-top: 4px;
  font-size: 13px;
}
.ev {
  width: 4rem;
  font-size: 12px;
  font-weight: 700;
  margin-left: 4px;
  text-align: center;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
label {
  width: 48px;
  display: inline-block;
}
span {
  font-size: 12px;
  font-weight: 700;
  height: 25px;
  line-height: 25px;
  margin-left: 4px;
  vertical-align: middle;
  width: 30px;
}
</style>
