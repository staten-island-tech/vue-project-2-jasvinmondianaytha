<script setup>
import StatRow from './StatRow.vue';</script>
<template>
    <table class="wrapper">
        <tr class="mini-caption">
            <td>
                <label id="label-attribute">Attribute</label>
            </td>
            <td class="mini-cap-contents">Base</td>
            <td class="mini-cap-contents">IVs</td>
            <td class="mini-cap-contents">EVs</td>
            <td class="mini-cap-contents" title="Positive/Negative Nature">Nat</td>
            <td class="mini-cap-contents" title="In-battle Value">Val</td>
        </tr>
        <StatRow attr="hp" />
        <StatRow attr="atk" />
        <StatRow attr="def" />
        <StatRow attr="spatk" />
        <StatRow attr="spdef" />
        <StatRow attr="spd" />
    </table>
</template>

<style scoped>
.wrapper label {
    width: 48px;
    display: inline-block;
}
.base {
    margin-left: 4px;
    width: 30px;
}
.mini-cap-contents {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}
</style>