import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout/Layout'
import Student from './student'
import School from './school'
import Grade from './grade'
import Class from './class'
import User from './user'

const Login = () => import('@/views/login/login')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'login' }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    ...Student,
    ...School,
    ...Grade,
    ...Class,
    ...User,
  ]
})

