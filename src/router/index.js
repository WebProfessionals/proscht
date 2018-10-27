import Vue from 'vue'
import Router from 'vue-router'
import Beispiel from '@/components/Beispiel'
import Players from '@/components/Players'
import Home from '@/components/Home'
import GameBoard from '@/components/GameBoard'
import Auth from '@/components/Auth'
import AuthSuccess from '@/components/AuthSuccess'

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
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/gameboard',
      name: 'GameBoard',
      component: GameBoard
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/success',
      name: 'AuthSuccess',
      component: AuthSuccess
    }
  ]
})
