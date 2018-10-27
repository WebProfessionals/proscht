<template>
    <div class="text-xs-center">
        <h2>Wähle eine Figur</h2>
        <v-btn outline><img src="@/assets/img/luckyluke.svg" alt="Lucky Luke" class="players"></v-btn>
        <v-btn outline><img src="@/assets/img/luckyluke.svg" alt="Lucky Luke" class="players"></v-btn>
        <v-btn outline><img src="@/assets/img/luckyluke.svg" alt="Lucky Luke" class="players"></v-btn>
        <v-btn outline><img src="@/assets/img/luckyluke.svg" alt="Lucky Luke" class="players"></v-btn>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .player-buttons {
        list-style-type: none;
        display: inline-block;
    }
    .players {
        width: 6em;
    }

    .v-btn.v-btn--outline {
        background: transparent;
        border: none;
        box-shadow: none;
    }
</style>
