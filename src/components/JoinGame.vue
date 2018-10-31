
  <template>
    <div class="text-xs-center container">

      <div>
        <v-container fluid grid-list-xl>
          <h2 class="display-3">Wähle deine Figur</h2>

          <div class="avatar">
            <v-btn class="player-button"><img src="@/assets/img/luckyluke.svg" alt="Lucky Luke">
            </v-btn>

          </div>

          <div class="avatar">
            <v-btn class="player-button"><img src="@/assets/img/supermario.svg" alt="Super Mario">
            </v-btn>

          </div>


          <div class="avatar">
            <v-btn class="player-button"><img src="@/assets/img/lukeskywalker.svg" alt="Luke Skywalker">
            </v-btn>

          </div>


          <div class="avatar">
            <v-btn class="player-button"><img src="@/assets/img/peach.svg" alt="Peach">
            </v-btn>

          </div>

        </v-container>
        <br>
        <v-text-field
                label="Name"
                v-model="gamerName"
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
        gameId: this.$route.query.gid,
        gamerName: null,
        uid: null
      }
    },
    computed: {
      ...mapState(['currentUser'])
    },
    mounted: function () {
      this.auth()
    },
    methods: {
      auth: function () {
        let self = this
        fb.auth.signInAnonymously().then(user => {
          self.uid = user.user.uid
          this.$store.commit('setCurrentUser', user)
        }).catch(err => {
          console.log(err)
        })
      },
      joinGame: function () {
        let self = this
        fb.gamesCollection.doc(this.gameId).collection('players').doc(self.uid).set({
          player: self.uid,
          score: 3,
          name: self.gamerName
        }).then(ref => {
          // self.gameId = ref.id
          let userName = {name: self.gamerName}
          localStorage.setItem('currentUserName', JSON.stringify(userName))
          self.$router.push({ path: 'gameboard', query: { gid: self.gameId } })
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
