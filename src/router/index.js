import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Beispiel from '@/components/Beispiel'
<<<<<<< HEAD
import Home from '@/components/Home'
=======
import Auth from '@/components/Auth'
import AuthSuccess from '@/components/AuthSuccess'
>>>>>>> 3f7f3363d1ee3bc23d6b4b6d7454c6b1f94e35f0

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
<<<<<<< HEAD
      path: '/home',
      name: 'Home',
      component: Home
=======
      path: '/auth',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/success',
      name: 'AuthSuccess',
      component: AuthSuccess
>>>>>>> 3f7f3363d1ee3bc23d6b4b6d7454c6b1f94e35f0
    }

  ]
})
