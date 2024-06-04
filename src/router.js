import { createRouter, createWebHistory } from 'vue-router';
import {useAuthStore} from '@/stores/authStore'
import {inject} from 'vue'

const routes = [
  
    {
      meta: {
        title: 'Home'
      },
      path: '/',
      name: 'index',
      component: () => import('@/pages/Index.vue'),
    },
    {
      meta: {
        title: 'Chat'
      },
      path: '/chat',
      name: 'chat',
      component: () => import('@/pages/Chat.vue')
    },
    {
      meta: {
        title: 'Signin'
      },
      path: '/signin',
      name: 'signin',
      component: () => import('@/pages/Signin.vue')
    },
    {
      meta: {
        title: 'Register'
      },
      path: '/register',
      name: 'register',
      component: () => import('@/pages/Register.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 }
    }
});

router.beforeEach(async (to, from ) => {
  const authPromise = inject('authPromise');
  const authStore = useAuthStore()

  try {
    if(!authStore.isAuth){
      await authPromise;
    }
    
   
    if(!authStore.isAuth && to.name === 'chat'){
      console.log('not auth');
      return {name:'signin'}
    } 
    else if(authStore.isAuth && to.name === 'signin'){
      return {name:'index'}
    }
    else if(authStore.isAuth && to.name === 'register'){
      return {name:'index'}
    }
    
  } catch (error) {
    console.log('an error',error, to);
    if(to.name === 'chat'){
      return {name:'signin'}
    }
    
  }
  
});

export default router;
