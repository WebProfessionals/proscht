<template>
  <v-app>
<<<<<<< HEAD
    <v-content>
      <router-view/>
    </v-content>
=======
      <router-view/>
>>>>>>> 358bc69b818ad38b6ac2b46869dd206a5ace5693
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  name: 'App'
}
</script>

<style scoped>
  .container {
    padding: 0;
  }
</style>