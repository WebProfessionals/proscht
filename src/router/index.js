import Vue from 'vue'
import Router from 'vue-router'
import Beispiel from '@/components/Beispiel'
import Players from '@/components/Players'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/beispiel',
      name: 'Beispiel',
      component: Beispiel
    },
    {
      path: '/players',
      name: 'Players',
      component: Players
    }
  ]
})
