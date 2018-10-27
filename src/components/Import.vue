<template>
  <div>

  </div>
</template>
<script>
  import { mapState } from 'vuex'
  const fb = require('../helpers/firebaseConfig')
  export default {
    name: 'GameBoard',
    data () {
      return {
        questions: [
          {
            question: 'Frage 1',
            answer1: 'Antwort 1',
            answer2: 'Antwort 2',
            answer3: 'Antwort 3',
            answer4: 'Antwort 4'
          },
          {
            question: 'Frage 2',
            answer1: 'Antwort 1',
            answer2: 'Antwort 2',
            answer3: 'Antwort 3',
            answer4: 'Antwort 4'
          }
        ]
      }
    }
  }
</script>
