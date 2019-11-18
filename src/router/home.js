const student = () => import('@/views/home/student')
const check = () => import('@/views/home/check')
const pay = () => import('@/views/home/pay')
import Mobile from '@/components/layout/Mobile'
export default [
  {
    path: '/home',
    component: Mobile,
    redirect: { name: 'home-student' },
    children: [
      {
        path: 'home-student',
        name: 'home-student',
        component: student,
      },
      {
        path: 'home-check',
        name: 'home-check',
        component: check,
      },
      {
        path: 'home-pay',
        name: 'home-pay',
        component: pay,
      }
    ]
  },
]
