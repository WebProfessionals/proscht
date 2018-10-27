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
        <v-layout row>
          <v-flex xs12>
            Game: {{gameId}}
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-btn class="btn--new" block v-on:click="startRound">Runde starten</v-btn>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 class="name_id">
            ID aktuelle Frage: {{currentGame.currentQuestion}}<br>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 class="question">
            Frage: {{currentQuestion.question}}
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-btn block class="answer btn-1">Antwort 1: {{currentQuestion.answer1}}</v-btn>
          </v-flex>
          <v-flex xs12>
            <v-btn block class="answer btn-2">Antwort 2: {{currentQuestion.answer2}}</v-btn>
          </v-flex>
          <v-flex xs12>
            <v-btn block class="answer btn-3">Antwort 3: {{currentQuestion.answer3}}</v-btn>
          </v-flex>
          <v-flex xs12>
            <v-btn block class="answer btn-4">Antwort 4: {{currentQuestion.answer4}}</v-btn>
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
        gameId: this.$route.query.gid,
        currentGame: {
          currentQuestion: null
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
      this.getGameData()
    },
    methods: {
      randomValue: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
      },
      startRound: function () {
        let questionsArray = []
        let self = this
        // ID's aller Fragen holen (unschöner Workarozund aufgrund Zeitmangel)
        fb.quizCollection.get().then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            let tempItem = doc.data()
            tempItem.id = doc.id
            questionsArray.push(tempItem)
          })
          // ID vom aktueller Quizfrage im aktuellen Game eintragen
          fb.gamesCollection.doc(self.gameId).set({
            currentQuestion: questionsArray[self.randomValue(0, 1)].id
          })
        })
      },
      getGameData: function () {
        // ID der aktuellen Quizfrage laden
        let self = this
        fb.gamesCollection.doc(this.gameId)
          .onSnapshot(function (doc) {
            self.currentGame = doc.data()
            self.getQuestion()
          })
      },
      getQuestion: function () {
        // Fragen und Antworten der aktuellen Quizfrage laden
        let self = this
        self.currentQuestion = {}
        fb.quizCollection.doc(this.currentGame.currentQuestion)
          .onSnapshot(function (doc) {
            self.currentQuestion = doc.data()
          })
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
