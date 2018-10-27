<template>
  <v-container fluid grid-list-xl>
    <v-layout align-center justify-center row class="game-board_header">
      <v-flex xs2 class="power-up_points--container text-xs-center">
        <p class="power-up_points--text">25</p>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs3>
        <v-layout row>
          <v-flex xs4>
            <img class="live_icon" src="@/assets/img/heart-dummy.svg">
          </v-flex>
          <v-flex xs4>
            <img class="live_icon" src="@/assets/img/heart-dummy.svg">
          </v-flex>
          <v-flex xs4>
            <img class="live_icon" src="@/assets/img/heart-dummy.svg">
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout class="game-board_body" align-center justify-center row fill-height>
      <v-flex xs12>
        GAME ON!
      </v-flex>
    </v-layout>
    <v-layout row wrap class="game-board_footer">
      <v-flex xs1>
        <img src="@/assets/img/powerUp-dummy.svg">
      </v-flex>
      <v-flex xs1>
        <img src="@/assets/img/powerUp-dummy.svg">
      </v-flex>
      <v-flex xs1>
        <img src="@/assets/img/powerUp-dummy.svg">
      </v-flex>
      <v-flex xs1>
        <img src="@/assets/img/powerUp-dummy.svg">
      </v-flex>
      <v-flex xs1>
        <img src="@/assets/img/powerUp-dummy.svg">
      </v-flex>
      <v-flex xs1>
        <img src="@/assets/img/powerUp-dummy.svg">
      </v-flex>
      <v-flex xs1>
        <img src="@/assets/img/powerUp-dummy.svg">
      </v-flex>
      <v-flex xs1>
        <img src="@/assets/img/powerUp-dummy.svg">
      </v-flex>
    </v-layout>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .power-up_points--text {
    font-size: 7rem;
    font-weight: bolder;
    line-height: 9rem;
  }

  .power-up_points--container {
    border-right: 2px solid gray;
    box-shadow: 2px 2px 20px black;
    height: 10rem;;
  }

  .game-board_footer {
      background-color: grey;
      border-top: 3px solid yellow;
    }
  .game-board_body {
    background-color: black;
    color: white;
  }
  .game-board_header {
    background-color: yellow;
    border-bottom: 3px solid grey;
  }

</style>
