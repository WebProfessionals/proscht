import Vue from 'vue'
import Router from 'vue-router'
import Players from '@/components/Players'
import Home from '@/components/Home'
import GameBoard from '@/components/GameBoard'
import Auth from '@/components/Auth'
import AuthSuccess from '@/components/AuthSuccess'
import ShareLink from '@/components/ShareLink'
import JoinGame from '@/components/JoinGame'
import Drink from '@/components/Drink'
import Import from '@/components/Import'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
    },
    {
      path: '/link',
      name: 'ShareLink',
      component: ShareLink
    },
    {
      path: '/join',
      name: 'JoinGame',
      component: JoinGame
    },
    {
      path: '/drink',
      name: 'Drink',
      component: Drink
    },
    {
      path: '/import',
      name: 'Import',
      component: Import
    }
  ]
})
