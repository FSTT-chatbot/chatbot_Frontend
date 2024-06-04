<template>
  <Auth>
    <div class="container mx-auto px-4 h-full">
      <div class="flex content-center items-center justify-center h-full">
        <div class="w-full lg:w-6/12 px-4">
          <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
          >
            
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
             
              <form @submit.prevent="submit" class="mt-6">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Username
                  </label>
                  <InputText required class="w-full"  placeholder="Username" v-model="form.username" />

                </div>

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
                  <Password required class="w-full" v-model="form.password" placeholder="Password"  toggleMask />
                </div>

                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Confirm password
                  </label>
                  <Password @change="passwordInputChange" ref="confirmPasswordInput" invalid required class="w-full" v-model="form.confirm_password" placeholder="Confirm password"  :feedback="false" toggleMask />
                </div>


                <div>
                  <label class="inline-flex items-center cursor-pointer">
                    <div class="w-fit h-3">
                      <Checkbox ref="policyCheckbox" required class="outline outline-transparent" v-model="form.policy_agreed" binary />
                    </div> 
                    <span class="ml-2 text-sm font-semibold text-blueGray-600 h-3">
                      I agree with the
                      <a href="javascript:void(0)" class="text-emerald-500">
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                </div>

                <div class="text-center mt-6">
                  <button
                    class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="submit"
                  >
                    <i v-if="loading" class="fa fa-circle-notch animate-spin"></i>
                    <span v-else>  Create Account</span>
                   
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="flex flex-wrap mt-6 relative">
            
            <div class="w-1/2 text-right ml-auto">
              <router-link to="/signin" class="text-blueGray-200">
                <small>Already have an account</small>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Auth>
</template>
<script setup>
import {ref, reactive,computed , onMounted, watch} from "vue";
import github from "@/assets/img/github.svg";
import google from "@/assets/img/google.svg";
import Auth from "@/layouts/Auth.vue";
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Checkbox from 'primevue/checkbox';
import {useAuthStore} from '@/stores/authStore'

const authStore = useAuthStore()

const form = reactive({
  username: 'legros_rosa',
  email: 'legros.rosa@example.org',
  password: 'password',
  confirm_password: 'password',
  policy_agreed:false
})
const loading = ref(false)

const confirmPasswordInput = ref(null)
const policyCheckbox = ref(null)



async function submit() {
  // validating comfirm_password
  loading.value = true
  if(form.password !== form.confirm_password){
    let input = confirmPasswordInput.value?.$el.querySelector('input')
    input.setCustomValidity('please match with password');
    input.reportValidity(); 
  }

  await authStore.register(form)




  loading.value = false

}

//remove confirm_password validation error on input
function passwordInputChange(event) {
  console.log('change');
  let input = confirmPasswordInput.value?.$el.querySelector('input')
  input.setCustomValidity('');
}

//validate policy_agreement
watch(()=>form.policy_agreed, val=>{
  let checkboxInput = policyCheckbox.value?.$el.querySelector('input')
  if(val){
    checkboxInput.setCustomValidity('');
  }else{
    checkboxInput.setCustomValidity('Please agree to our policy to preceed!');
  }
})

onMounted(() => {
  //set a custom validation message for policy agreement checkbox
  let checkboxInput = policyCheckbox.value?.$el.querySelector('input')
  checkboxInput.setCustomValidity('Please agree to our policy to preceed!');
})

</script>
