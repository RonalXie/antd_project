import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PictureVIew from "@/views/PictureVIew.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/picture',
    name: 'picture',
    component: PictureVIew
  }
]

const router = new VueRouter({
  routes
})

export default router
