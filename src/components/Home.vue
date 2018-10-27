<template>
    <div class="home">
        <img class="proscht-logo" src="@/assets/img/proscht-logo.svg">

        <v-text-field
                v-if="!gameId"
                label="Game Name"
                v-model="gameName"></v-text-field>

        <v-btn v-if="!gameId" class="button-start" v-on:click="createGame">Spiel Erstellen</v-btn>

        <h5 v-if="gameId" class="lbl text-xs-center">invite players with this link:</h5>
        <div v-if="gameId" class="linkBox">
            <code id="gameLink"> http://localhost:8080/#/join?gid={{ gameId }} </code>
            <v-btn small class="btnCopy text-xs-center" v-on:click="copyGameLink">copy</v-btn>
        </div>
        <br>
        <!--UID: {{currentUser.uid}}<br>-->
        <!--<p v-if="gameId">gameId: {{gameId}}</p>-->
    </div>
</template>

<script>
  import {mapState} from 'vuex'

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
      },

      copyGameLink: function () {
        let testingCodeToCopy = document.querySelector('#gameLink')
        testingCodeToCopy.setAttribute('type', 'text')
        testingCodeToCopy.select()
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

    .btnCopy {
        margin: 15px auto;
    }

    .lbl {
        padding-top: 25vh;
    }

    .linkBox {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    code {
        margin: 0 auto;
    }

</style>
