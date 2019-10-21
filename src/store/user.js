
import storage from 'good-storage'
import Router from '@/router/index'

export default{
    state: {
        username:storage.get('username'),
        token:storage.get('token'),
        userId:storage.get('userId')
    },
    mutations: {
        setUser(state,payload){
            // const { username, token, role, id, superAdmin } = payload
            state.username = payload.username
            state.token = payload.token
            state.userId = payload.id

            storage.set('username',payload.username) 
            storage.set('token',payload.token) 
            storage.set('userId',payload.id) 
        },
        logout(state) {
            state.username = ''
            state.token = ''
            state.userId = ''
            storage.remove('username')
            storage.remove('userId')
            storage.remove('token')

            Router.push({ name: 'login' })
        },
    },
    getters: {
        username: state => state.username,
        userId: state => state.userId,
        token: state => state.token,
    },
    
}