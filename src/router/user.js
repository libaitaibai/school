const List = () => import('@/views/user/list')
const create = () => import('@/views/user/create')
const edit = () => import('@/views/user/edit')
import Layout from '@/components/layout/Layout'

export default[
    {
        path: '/account',
        // name: 'Home',
        component: Layout,
        redirect: { name: 'account-list' },
        children: [
            {
                path: 'account-list',
                name: 'account-list',
                component: List,
            },
            {
                path: 'account-create',
                name: 'account-create',
                component: create,
            },
            {
                path: 'account-edit/:userId',
                name: 'account-edit',
                component: edit,
            },
        ]
    },   
]