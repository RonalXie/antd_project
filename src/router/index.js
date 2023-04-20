import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PictureVIew from "@/views/PictureVIew.vue";
import LoginView from "@/views/LoginView.vue";
import AdminCenterView from "@/views/AdminCenterView.vue";

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
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/admin/center',
    name: 'admin',
    component: AdminCenterView
  }
]

const router = new VueRouter({
  routes
})

export default router
