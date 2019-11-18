import storage from 'good-storage'

export default{
    state:{
        Openid:storage.get('Openid')
    },
    getters: {
        Openid :state => { state.Openid}
    },
    mutations : {
        setOpenid(state, list){
          if(list.openid){
            state.Openid = list.openid
            storage.set('Openid',list.openid)
          }
        }
    },

}
