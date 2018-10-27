<template>
  <div>
    <h1>Authentifizierung erfolgreich</h1>
    <p>uid: {{uid}}</p>
    <p>user: {{user}}</p>
    <p>currentUser: {{currentUser}}</p>

  </div>
</template>

<script>
  import { mapState } from 'vuex'
  const fb = require('../helpers/firebaseConfig')

  export default {
    data () {
      return {
        uid: 'test',
        user: null
      }
    },
    name: 'AuthSuccess',
    computed: {
      ...mapState(['currentUser'])
    },
    mounted () {
      console.log(fb.currentUser)
    }
  }
</script>
