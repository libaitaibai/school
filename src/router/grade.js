const List = () => import('@/views/grade/list')
import Layout from '@/components/layout/Layout'

export default[
    {
        path: '/grade',
        component: Layout,
        redirect: { name: 'grade-list' },
        children: [
            {
                path: 'grade-list',
                name: 'grade-list',
                component: List,
            }
        ]
    },   
]