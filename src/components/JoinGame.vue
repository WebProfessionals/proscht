
  <template>
    <div class="text-xs-center container">

      <div>
        <v-container fluid grid-list-xl>
          <h2 class="display-3">Wähle deine Figur</h2>

          <div class="avatar">
            <v-btn class="player-button"><img src="@/assets/img/luckyluke.svg" alt="Lucky Luke">
            </v-btn>
            <h2>Name</h2>
          </div>

          <div class="avatar">
            <v-btn class="player-button"><img src="@/assets/img/supermario.svg" alt="Super Mario">
            </v-btn>
            <h2>Name</h2>
          </div>


          <div class="avatar">
            <v-btn class="player-button"><img src="@/assets/img/lukeskywalker.svg" alt="Luke Skywalker">
            </v-btn>
            <h2>Name</h2>
          </div>


          <div class="avatar">
            <v-btn class="player-button"><img src="@/assets/img/peach.svg" alt="Peach">
            </v-btn>
            <h2>Name</h2>
          </div>

        </v-container>
        <br>
        <v-text-field
                id="gameIdInput"
                label="Game Id"
                v-model="gameId"
        ></v-text-field>
        <br>
        <v-btn class="join-btn" v-on:click="joinGame">Beitreten</v-btn>

      </div>

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
      console.log('uid', this.currentUser.uid)
      document.getElementById('gameIdInput').value = this.gameId
      // this.gameId = ref.id
      console.log('gid', this.gameId)
    },
    methods: {
      joinGame: function () {
        fb.gamesCollection.doc(this.gameId).collection('players').doc(this.currentUser.uid).set({
          player: this.currentUser.uid,
          score: 3
        }).then(ref => {
          this.gameId = ref.id
          console.log(ref)
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

  <style scoped>

    h2.display-3 {
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

    .v-text-field {
      visibility: hidden;
    }

    .v-btn.join-btn {
      background-color: #000!important;
      color: white;
      width: 15em;
      height: 50px;
      font-size: 25px;
    }
    .avatar {
      display: inline-block;
    }

    .v-btn__content {
      color: #fff!important;
    }

  </style>
