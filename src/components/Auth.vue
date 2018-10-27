<template>
  <div>
    <h1>Du wirst automatich authentifieziert</h1>
  </div>
</template>

<script>
  const fb = require('../helpers/firebaseConfig')
  export default {
    data () {
      return {
      }
    },
    name: 'Auth',
    mounted: function () {
      this.auth()
    },
    methods: {
      auth: function () {
        fb.auth.signInAnonymously().then(user => {
          this.$store.commit('setCurrentUser', user)
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>
