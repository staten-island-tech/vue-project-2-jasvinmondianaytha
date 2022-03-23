<template>
    <article class="pokemon-card">
        <div class="pokemon-container">
            <div class="poke-media-container">
                <img src="https://play.pokemonshowdown.com/sprites/gen1/abra.png" alt />
            </div>
            <pre class="poke-info-container">
<span class="type-fire">Abra</span> @ Choice Specs  
<span class="attr">Ability: </span>Water Absorb  
<span class="attr">EVs: </span><span class="stat-spa">252 SpA</span> / <span class="stat-spd">4 SpD</span> / <span class="stat-spe">252 Spe</span>  
Timid Nature  
<span class="attr">IVs: </span><span class="stat-atk">0 Atk</span>  
<span class="type-water">-</span> Steam Eruption  
<span class="type-fire">-</span> Flamethrower  
<span class="type-ground">-</span> Earth Power  
<span class="type-poison">-</span> Sludge Wave  
    </pre>
        </div>

        <div
            class="desc"
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, similique voluptatem exercitationem culpa, incidunt nam eos aut dolor tenetur ratione non inventore recusandae? Reiciendis optio recusandae ex dolor quia totam.</div>
    </article>
</template>

<style scoped>
.pokemon-card {
    display: flex;
    flex-direction: column;
}
.pokemon-container {
    display: flex;
}
.poke-media-container img {
    width: 15rem;
}
.desc {
    width: 16rem;
}
</style>
