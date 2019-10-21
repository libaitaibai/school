import axios from 'axios';
import '../../public/config/index.js'
import storage from 'good-storage'

const  http = axios.create({
    baseURL : window.$config.BASE_URL,
    timeout: 3000,
})

http.interceptors.request.use(
    function(config){
        const token = storage.get('token')

        // 添加token
        token &&
        (config.headers = Object.assign({}, config.headers, {
            token: token
        }))

        console.log(config,token)

        return config
    },function(error) {
        return Promise.reject(error)
    }
)

http.interceptors.response.use(
function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});


export default http
