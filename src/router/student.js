const List = () => import('@/views/student/list')
import Layout from '@/components/layout/Layout'

export default [
    {
        path: '/student',
        // name: 'Home',
        component: Layout,
        redirect: { name: 'student-list' },
        children: [
            {
                path: 'student-list',
                name: 'student-list',
                component: List,
            }
        ]
    },
]