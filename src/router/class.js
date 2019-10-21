const List = () => import('@/views/class/list')
import Layout from '@/components/layout/Layout'

export default[
    {
        path: '/class',
        // name: 'Home',
        component: Layout,
        redirect: { name: 'class-list' },
        children: [
            {
                path: 'class-list',
                name: 'class-list',
                component: List,
            }
        ]
    },   
]