<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
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

<style>
  .display-2, .display-3, div {
    font-family: 'VT323', monospace!important;
  }

  body {
    font-size: 18px;
    background-color: #fff;
    margin: 0;
    padding: 0;
    min-height: 100%;
  }
  .container {
    padding: 0;
  }
</style>
