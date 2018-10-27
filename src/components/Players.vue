<template>
    <div class="text-xs-center">
        <h2>Wähle eine Figur</h2>
        <v-btn class="player-button"><img src="@/assets/img/luckyluke.svg" alt="Lucky Luke"></v-btn>
        <v-btn class="player-button"><img src="@/assets/img/luckyluke.svg" alt="Lucky Luke"></v-btn>
        <v-btn class="player-button"><img src="@/assets/img/luckyluke.svg" alt="Lucky Luke"></v-btn>
        <v-btn class="player-button"><img src="@/assets/img/luckyluke.svg" alt="Lucky Luke"></v-btn>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .player-button {
        width: 15em;
    }

    .theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) {
        background-color: transparent;
    }

    .v-btn:not(.v-btn--depressed):not(.v-btn--flat) {
        box-shadow: 0 0 0;
    }

</style>
