import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Beispiel from '@/components/Beispiel'
import GameBoard from '@/components/GameBoard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/beispiel',
      name: 'Beispiel',
      component: Beispiel
    },
    {
      path: '/gameboard',
      name: 'GameBoard',
      component: GameBoard
    }
  ]
})
