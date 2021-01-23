import { createRouter, createWebHistory } from 'vue-router'
import welcome from '../views/welcome.vue'
import chatroom from '../views/chatRoom.vue'
import {projectAuth} from '../firebase/config'


const requireAuth = (to,from,next) =>{
     let user =projectAuth.currentUser
     console.log('auth gurd',user)
     if (!user) {
       next({ name:'welcome'})
       
     }else{
      next()
     }
    
}

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: welcome
  },
  {
    path: '/chatroom',
    name: 'chatroom',
    component: chatroom,
    beforeEnter: requireAuth
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
