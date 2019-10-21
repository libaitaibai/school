const List = () => import('@/views/school/list')
import Layout from '@/components/layout/Layout'

export default[
    {
        path: '/school',
        name: 'school',
        component: Layout,
        redirect: { name: 'school-list' },
        children: [
            {
                path: 'school-list',
                name: 'school-list',
                component: List,
            },
        ]
    },   
]