<template>
  <div>
    Spiel beitreten
    <br>
    <v-text-field
      id="gameIdInput"
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
        gameId: this.$route.query.gid
      }
    },
    computed: {
      ...mapState(['currentUser'])
    },
    mounted: function () {
      console.log('asdf', this.$route.query.gid)
      document.getElementById('gameIdInput').value = this.gameId
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