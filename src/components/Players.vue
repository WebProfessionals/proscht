<template>
    <div class="text-xs-center container">
        <v-container fluid grid-list-xl>
        <h2 class="display-3">Wähle deine Figur</h2>
        <v-btn class="player-button"><img src="@/assets/img/luckyluke.svg" alt="Lucky Luke"></v-btn>
        <v-btn class="player-button"><img src="@/assets/img/supermario.svg" alt="Lucky Luke"></v-btn>
        <v-btn class="player-button"><img src="@/assets/img/lukeskywalker.svg" alt="Lucky Luke"></v-btn>
        <v-btn class="player-button"><img src="@/assets/img/peach.svg" alt="Lucky Luke"></v-btn>
        </v-container>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    h2 {
        margin-bottom: 40px;
    }
    .player-button {
        width: 12em;
        height: auto;
        padding: 40px;
    }

    .theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) {
        background-color: transparent;
    }

    .v-btn:not(.v-btn--depressed):not(.v-btn--flat) {
        box-shadow: 0 0 0;
    }

</style>
