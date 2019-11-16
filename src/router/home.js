const student = () => import('@/views/home/student')
const check = () => import('@/views/home/check')
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
      }
    ]
  },
]
