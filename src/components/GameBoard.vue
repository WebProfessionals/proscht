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
            <img class="icon" src="@/assets/img/heart-dummy.svg" v-if="currentGameUserData.score>0">
            <v-btn v-if="currentGameUserData.score<1" v-on:click="resetScore">Neu einsteigen</v-btn>
          </v-flex>
          <v-flex xs4>
            <img class="icon" src="@/assets/img/heart-dummy.svg" v-if="currentGameUserData.score>1">
          </v-flex>
          <v-flex xs4>
            <img class="icon" src="@/assets/img/heart-dummy.svg" v-if="currentGameUserData.score>2">
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout class="game-board_body" align-center justify-center row fill-height>
      <v-flex xs12>
        <v-layout row>
          <v-flex xs12>
            Winner: {{currentGame.currentWinnerName}}<br>
            Looser: {{currentGame.currentLooserName}}<br>
            Dein Score: {{currentGameUserData.score}}<br>
          </v-flex>
r       </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-btn class="btn--new" block v-on:click="startRound">Neue Runde starten</v-btn>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 class="name_id">
            ID aktuelle Frage: {{currentGame.currentQuestion}}<br>
          </v-flex>
        </v-layout>
        <v-layout row v-if="!currentGame.firstround">
          <v-flex xs12 class="question">
            Frage: {{currentQuestion.question}}
          </v-flex>
        </v-layout>
        <v-layout row wrap v-if="!currentGame.firstround">
          <v-flex xs12 id="btn-1">
            <v-btn block class="answer btn-1" v-on:click="saveAnswer(true)">{{currentQuestion.answer1}}</v-btn>
          </v-flex>
          <v-flex xs12 id="btn-2">
            <v-btn block class="answer btn-2" v-on:click="saveAnswer(false)">{{currentQuestion.answer2}}</v-btn>
          </v-flex>
          <v-flex xs12 id="btn-3">
            <v-btn block class="answer btn-3" v-on:click="saveAnswer(false)">{{currentQuestion.answer3}}</v-btn>
          </v-flex>
          <v-flex xs12 id="btn-4">
            <v-btn block class="answer btn-4" v-on:click="saveAnswer(false)">{{currentQuestion.answer4}}</v-btn>
          </v-flex>
        </v-layout>
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

<script>
  import { mapState } from 'vuex'
  const fb = require('../helpers/firebaseConfig')
  export default {
    name: 'GameBoard',
    data () {
      return {
        uid: null,
        firstRound: true,
        voted: false,
        gameId: this.$route.query.gid,
        currentGame: {
          currentQuestion: null,
          currentWinner: null,
          currentWinnerName: null,
          currentLooser: null,
          currentLooserName: null
        },
        currentUsername: null,
        currentGameUserData: {
          score: 3
        },
        allQuestions: [],
        currentQuestionId: null,
        currentQuestion: {
          question: '',
          answer1: '',
          answer2: '',
          answer3: '',
          answer4: ''
        }
      }
    },
    computed: {
      ...mapState(['currentUser'])
    },
    mounted: function () {
      this.auth()
      this.getGameData()
      this.currrentUserName = JSON.parse(localStorage.getItem('currentUserName')).name
    },
    watch: {
      currentQuestion: {
        handler: function (newValue) {
          this.voted = false
        },
        deep: true
      }
    },
    methods: {
      auth: function () {
        let self = this
        fb.auth.signInAnonymously().then(user => {
          self.uid = user.user.uid
          this.$store.commit('setCurrentUser', user)
          this.getGameUserData()
        }).catch(err => {
          console.log(err)
        })
      },
      randomValue: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
      },
      resetScore: function () {
        fb.gamesCollection.doc(this.gameId).collection('players').doc(this.uid).set({
          score: 3
        }, { merge: true })
      },
      startRound: function () {
        // Gewinner Punkte berechnen
        let self = this
        if (this.currentGame.currentWinner) {
          fb.gamesCollection.doc(this.gameId).collection('players').doc(this.currentGame.currentWinner).get().then(function (doc) {
            let scoreWinner = doc.data().score + 1
            fb.gamesCollection.doc(self.gameId).collection('players').doc(self.currentGame.currentWinner).set({
              score: scoreWinner
            }, { merge: true })
          })
        }
        // Verlierer Punkte berechnen
        if (this.currentGame.currentLooser) {
          fb.gamesCollection.doc(this.gameId).collection('players').doc(this.currentGame.currentLooser).get().then(function (doc) {
            let scoreLooser = doc.data().score - 1
            fb.gamesCollection.doc(self.gameId).collection('players').doc(self.currentGame.currentLooser).set({
              score: scoreLooser
            }, { merge: true })
          })
        }
        this.firstRound = false
        let questionsArray = []
        // ID's aller Fragen holen (unschöner Workarozund aufgrund Zeitmangel)
        fb.quizCollection.get().then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            let tempItem = doc.data()
            tempItem.id = doc.id
            questionsArray.push(tempItem)
          })
          // ID vom aktueller Quizfrage im aktuellen Game eintragen
          fb.gamesCollection.doc(self.gameId).set({
            currentQuestion: questionsArray[self.randomValue(0, 88)].id,
            currentWinner: null,
            currentLooser: null,
            firstround: false
          })

          for (let i = 1; i < 5; i++) {
            let r = Math.floor(Math.random() * Math.floor(100))
            document.getElementById('btn-' + i).style.order = r
          }
        })
      },
      getGameData: function () {
        // ID der aktuellen Quizfrage laden
        console.log('game loading')
        let self = this
        fb.gamesCollection.doc(this.gameId)
          .onSnapshot(function (doc) {
            self.currentGame = doc.data()
            self.getQuestion()
          })
      },
      getGameUserData: function () {
        let self = this
        console.log('uid' + self.uid)
        fb.gamesCollection.doc(this.gameId).collection('players').doc(self.uid)
          .onSnapshot(function (doc) {
            self.currentGameUserData = doc.data()
          })
      },
      getQuestion: function () {
        // Fragen und Antworten der aktuellen Quizfrage laden
        let self = this
        self.currentQuestion = {}
        fb.quizCollection.doc(self.currentGame.currentQuestion)
          .onSnapshot(function (doc) {
            self.currentQuestion = doc.data()
          })
      },
      saveAnswer: function (result) {
        // first or not?
        if (!this.voted) {
          let self = this
          self.voted = true
          fb.gamesCollection.doc(this.gameId).get().then(function (doc) {
            if (doc.exists) {
              if (doc.data().currentWinner || result === false) {
                fb.gamesCollection.doc(self.gameId).set({
                  currentLooser: self.uid,
                  currentLooserName: self.currrentUserName,
                  firstround: false
                }, { merge: true })
              } else {
                fb.gamesCollection.doc(self.gameId).set({
                  currentWinner: self.uid,
                  currentWinnerName: self.currrentUserName,
                  firstround: false
                }, { merge: true })
              }
            }
          })
        }
      }
    }
  }
</script>

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

  .name_id {
    display: none;
  }

  .game-board_body {
    background-color: black;
    color: white;
  }
  .game-board_header {
    height: 5rem;
  }

  .v-btn.answer.btn-1 {
    background-color: #f1bf2c;
  }

  .v-btn.answer.btn-2 {
    background-color: #be1524;
  }
  .v-btn.answer.btn-3 {
    background-color: #218ab7;
  }
  .v-btn.answer.btn-4 {
    background-color: #d11475;
  }


</style>
