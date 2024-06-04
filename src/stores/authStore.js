import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authUser: null,
    authErrorMessage:null,
    token:null,
  }),
  getters: {
    getAuthUser: (state) => state.authUser,
    getToken: (state) => state.token,
    isAuth : (state) => !!state.authUser && state.token,
    getAuthErrorMessage : (state) => state.authErrorMessage 
  },
  actions: {

    setAutUser (authUser){
        this.authUser = authUser
    },
    setAuthErrorMessage (message){
      this.authErrorMessage = message
    },
    setToken (token){
      this.token = token
    },

    
    async register(credentials){
      try {
          this.setAuthErrorMessage(null)
          let registerData = await axios.post('/register', credentials) 

          console.log('register Response',registerData)

          this.setAutUser(registerData.data.user)
          localStorage.setItem("authToken", `Bearer ${registerData.data.token}`);

          this.setToken(localStorage.getItem("authToken"));
          axios.defaults.headers.common['Authorization'] = localStorage.getItem("authToken");
          this.$router.push({ path: '/chat' })

      } catch (error) {
          console.log('login error',error)
          this.setAuthErrorMessage('Something went wrong!')
      }
  },
    
    
    async login(credentials){
        try {
            this.setAuthErrorMessage(null)
            let loginData = await axios.post('/login', credentials) 

            console.log('loginResponse',loginData)

            this.setAutUser(loginData.data.user)
            localStorage.setItem("authToken", `Bearer ${loginData.data.token}`);
            this.setToken(localStorage.getItem("authToken"));
            axios.defaults.headers.common['Authorization'] = localStorage.getItem("authToken");
            this.$router.push({ path: '/chat' })
        } catch (error) {
            console.log('login error',error)
            if(error.status === 422){
              this.setAuthErrorMessage('Incorrect credentials!')
            }else{
              this.setAuthErrorMessage('Something went wrong!')
            }
        }
    },

    async logout(){
      try {
        let logout = await axios.post('/logout') 
        console.log('logout', logout)
      } catch (error) {
        console.log('logout error',error)
      }
      this.setAutUser(null)
      localStorage.setItem("authToken", null);
      this.setToken(null);
      
      this.$router.push({ path: '/login' })
    },

  
  },
})