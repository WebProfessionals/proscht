<template>
    <div class="home">
        <img class="proscht-logo" src="@/assets/img/proscht-logo.svg">

        <v-text-field
          v-if="!gameId"
          label="Game Name"
          v-model="gameName"
        ></v-text-field>

        <v-btn class="button-start" v-on:click="createGame">Start</v-btn>
      <br>
      UID: {{currentUser.uid}}<br>
      <p v-if="gameId">gameId: {{gameId}}</p>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
  const fb = require('../helpers/firebaseConfig')
  export default {
    name: 'Home',
    data () {
      return {
        gameName: '',
        gameId: null
      }
    },
    computed: {
      ...mapState(['currentUser'])
    },
    mounted: function () {
    },
    methods: {
      createGame: function () {
        fb.gamesCollection.add({
          gamename: this.gameName
        }).then(ref => {
          this.gameId = ref.id
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>
    
    .proscht-logo {
        width: 400px;
    }

    .home {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        flex-direction: column;
    }

    .button-start {
        background-color: black !important;
        color: white;
        height: 150px;
        width: 800px;
        margin-top: 100px;
        font-size: 70px;
    }

</style>
