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
          <br>
          <v-btn v-on:click="startGame">Spiel starten</v-btn>
        </div>
        <br>
        UID: {{currentUser.uid}}<br>
        <p v-if="gameId">gameId: {{gameId}}</p>
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
      startGame: function () {
        this.$router.push({ path: 'gameboard', query: { gid: this.gameId } })
      },
      createGame: function () {
        fb.gamesCollection.add({
          gamename: this.gameName
        }).then(ref => {
          this.gameId = ref.id
        }).catch(err => {
          console.log(err)
        })
      },

      copyGameLink () {
        let link = document.getElementById('gameLink').innerHTML
        // Create a dummy input to copy the string array inside it
        var dummy = document.createElement('input')
        // Add it to the document
        document.body.appendChild(dummy)
        // Set its ID
        dummy.setAttribute('id', 'dummy_id')
        // Output the array into it
        document.getElementById('dummy_id').value = link
        // Select it
        dummy.select()
        // Copy its contents
        document.execCommand('copy')
        // Remove it as its not needed anymore
        document.body.removeChild(dummy)
      }
    }
  }
</script>

<style scoped>

    .proscht-logo {
        margin: 3em;
        width: 20em;
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
        width: 15em;
        height: 50px;
    }

    .btnCopy {
        margin: 0 auto;
    }

    .lbl {
    }

    .linkBox {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    code {
        margin: 15px auto;
        text-align: center;
    }
    @media (min-width: 480px) {

        .proscht-logo {
            margin: 3em;
            width: 30em;
        }
        .button-start {
            background-color: black !important;
            color: white;
            height: 90px;
            width: 11em;
            font-size: 40px;
        }
    }
</style>
