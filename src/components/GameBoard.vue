<template>
  <v-container fluid grid-list-xl class="game-board_container">
    <v-layout align-center justify-center row class="game-board_header">
      <v-flex xs4 class="power-up_points--container text-xs-center">
        <p class="power-up_points--text">25</p>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs6>
        <v-layout row justify-end>
          <v-flex xs4>
            <img class="icon" src="@/assets/img/heart-dummy.svg">
          </v-flex>
          <v-flex xs4>
            <img class="icon" src="@/assets/img/heart-dummy.svg">
          </v-flex>
          <v-flex xs4>
            <img class="icon" src="@/assets/img/heart-dummy.svg">
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout class="game-board_body" align-center justify-center row fill-height>
      <v-flex xs12>
        GAME ON!
      </v-flex>
    </v-layout>
    <v-layout row align-center wrap class="game-board_footer">
      <v-flex xs2>
        <img class="icon" src="@/assets/img/attack.svg">
      </v-flex>
      <v-flex xs2>
        <img class="icon" src="@/assets/img/shield.svg">
      </v-flex>
      <v-flex xs2>
        <img class="icon" src="@/assets/img/bomb.svg">
      </v-flex>
      <v-flex xs2>

      </v-flex>
      <v-flex xs2>

      </v-flex>
      <v-flex xs2>

      </v-flex>
      <v-flex xs2>

      </v-flex>
      <v-flex xs2>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container.grid-list-xl.game-board_container .layout:not(:only-child) {
    margin: 0;
  }
  .power-up_points--text {
    font-size: 3rem;
    font-weight: bolder;
    line-height: 3rem;
  }

  .power-up_points--container {
    border-right: 2px solid gray;
    box-shadow: 0px 2px 10px black;
    height: 100%;
  }

  .game-board_footer {
      background-color: white;
      border-top: 3px solid red;
      height: 10rem;
    }

  .icon {
    height: 3rem;
  }

  .game-board_body {
    background-color: black;
    color: white;
    height: calc(100vh - 15rem);
  }
  .game-board_header {
    height: 5rem;
  }

</style>
