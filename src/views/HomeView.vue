<template>
<div>yuh</div>
</template>

<script>
import { Pokemon } from "@/js/generate-pokemon"
export default {
  setup() {
    const pkmn = new Pokemon(1)
    console.log(pkmn)
  }
}

</script>