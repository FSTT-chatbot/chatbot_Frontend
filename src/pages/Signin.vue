<template>
  <Auth>
    <div class="container mx-auto px-4 h-full">
      <div class="flex content-center items-center justify-center h-full">
        <div class="w-full lg:w-4/12 px-4">
          <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
          >
            <!-- <div class="rounded-t mb-0 px-6 py-6">
              <div class="text-center mb-3">
                <h6 class="text-blueGray-500 text-sm font-bold">
                  Sign in with
                </h6>
              </div>
              <div class="btn-wrapper text-center">
                <button
                  class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                  type="button"
                >
                  <img alt="..." class="w-5 mr-1" :src="github" />
                  Github
                </button>
                <button
                  class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                  type="button"
                >
                  <img alt="..." class="w-5 mr-1" :src="google" />
                  Google
                </button>
              </div>
              <hr class="mt-6 border-b-1 border-blueGray-300" />
            </div> -->
            <div class="flex-auto px-4 lg:px-10 py-10">
              <div v-if="errorMessage" class="text-red-500 text-center mb-3 font-bold">
                <small>{{errorMessage}}</small>
              </div>
              <form @submit.prevent="submit">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <InputText required class="w-full" type="email" placeholder="Email" v-model="form.email" />

                 
                </div>

                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                <Password required class="w-full" v-model="form.password" placeholder="Password"  :feedback="false" toggleMask />

                
                </div>
                <div>
                  <label class="inline-flex items-center cursor-pointer">
                    <div class="w-fit h-3">
                      <Checkbox class="outline outline-transparent" v-model="form.remember_me" :binary="true" />
                    </div>
                    <span class="ml-2 text-sm font-semibold text-blueGray-600 h-3">
                      Remember me
                    </span>
                  </label>
                </div>

                <div class="text-center mt-6">
                  <button
                    class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 w-full ease-linear transition-all duration-150"
                    type="sumbit"
                  >
                  <i v-if="loading" class="fa fa-circle-notch animate-spin"></i>
                  <span v-else> Sign In</span>
                   
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="flex flex-wrap mt-6 relative">
            <div class="w-1/2">
              <a href="javascript:void(0)" class="text-blueGray-200">
                <small>Forgot password?</small>
              </a>
            </div>
            <div class="w-1/2 text-right">
              <router-link to="/register" class="text-blueGray-200">
                <small>Create new account</small>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Auth>

</template>
<script setup>
import {ref, reactive , onMounted, computed} from "vue";

import github from "@/assets/img/github.svg";
import google from "@/assets/img/google.svg";
import Auth from "@/layouts/Auth.vue";
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Checkbox from 'primevue/checkbox';
import {useAuthStore} from '@/stores/authStore'

const authStore = useAuthStore()
const errorMessage = computed(()=>authStore.getAuthErrorMessage)
const form = reactive({
  email: 'legros.rosa@example.org',
  password: 'password',
  remember_me:false
})
const loading = ref(false)

async function submit() {
    console.log('submit');
    loading.value = true
    await authStore.login(form)
    loading.value = false
}

</script>
