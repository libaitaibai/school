const student = () => import('@/views/home/student')
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
      }
    ]
  },
]
