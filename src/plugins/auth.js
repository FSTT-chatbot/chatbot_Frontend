import {useAuthStore} from '@/stores/authStore'
import axios from 'axios'
// import axios from '@/composables/axios'


const authPlugin = {
    install: async (app) => {
        const authStore = useAuthStore()
        console.log('plugin is working',import.meta.env.VITE_BASE_URL);
        axios.defaults.baseURL = import.meta.env.VITE_BASE_URL
        // let api = axios.create({
        //     withCredentials: false,
        //     baseURL:import.meta.env.VITE_BASE_URL
        // })
        // let res = await axios.get('http://localhost:8000/sanctum/csrf-cookie')
        // console.log('csrf',res);
        let authPromise = new Promise(async (resolve, reject) => {
          
          if(localStorage.getItem("authToken")){
              authStore.setToken(localStorage.getItem("authToken"));
              axios.defaults.headers.common['Authorization'] = localStorage.getItem("authToken");
              try {
                let response = await axios.get('/user')
                authStore.setAutUser(response.data)
                console.log('data fetch user',response);
                return resolve()
              } catch (error) {
                console.log(error);
                localStorage.setItem("authToken", '');
                authStore.setToken(localStorage.getItem("authToken"));
                return reject(error)
              }
          }else{
            return reject(null)
          }

        })

        app.provide('authPromise',authPromise)
    },
  };
export default  authPlugin;