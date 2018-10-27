import Vue from 'vue'
import Router from 'vue-router'
import Beispiel from '@/components/Beispiel'
<<<<<<< HEAD
import Players from '@/components/Players'
=======
<<<<<<< HEAD
<<<<<<< HEAD
import Home from '@/components/Home'
=======
=======
import GameBoard from '@/components/GameBoard'
>>>>>>> 2aa24c468c9d1f25e882e1ef1d7876b52673b4b4
import Auth from '@/components/Auth'
import AuthSuccess from '@/components/AuthSuccess'
>>>>>>> 3f7f3363d1ee3bc23d6b4b6d7454c6b1f94e35f0
>>>>>>> 358bc69b818ad38b6ac2b46869dd206a5ace5693

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/beispiel',
      name: 'Beispiel',
      component: Beispiel
    },
    {
<<<<<<< HEAD
      path: '/players',
      name: 'Players',
      component: Players
=======
<<<<<<< HEAD
<<<<<<< HEAD
      path: '/home',
      name: 'Home',
      component: Home
=======
=======
      path: '/gameboard',
      name: 'GameBoard',
      component: GameBoard
    },
    {
>>>>>>> 2aa24c468c9d1f25e882e1ef1d7876b52673b4b4
      path: '/auth',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/success',
      name: 'AuthSuccess',
      component: AuthSuccess
>>>>>>> 3f7f3363d1ee3bc23d6b4b6d7454c6b1f94e35f0
>>>>>>> 358bc69b818ad38b6ac2b46869dd206a5ace5693
    }

  ]
})
