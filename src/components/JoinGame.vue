<template>
  <div>
    Spiel beitreten
    <br>
    <v-text-field
      label="Game Id"
      v-model="gameId"
    ></v-text-field>
    <br>
    <v-btn v-on:click="joinGame">beitreten</v-btn>

  </div>

</template>
<script>
  import { mapState } from 'vuex'
  const fb = require('../helpers/firebaseConfig')
  export default {
    name: 'Join',
    data () {
      return {
        gameId: null
      }
    },
    computed: {
      ...mapState(['currentUser'])
    },
    mounted: function () {
    },
    methods: {
      joinGame: function () {
        fb.gamesCollection.doc(this.gameId).collection('players').add({
          player: this.currentUser.uid
        }).then(ref => {
          // this.gameId = ref.id
          console.log(ref)
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>
