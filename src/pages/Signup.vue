<template>
    <div class="h-screen w-full flex flex-col items-center justify-center gap-y-5 bg-[#171717]">
        <h1 class="font-bold text-3xl text-center">Sign up</h1>
        <form @submit.prevent="submit" class="w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl backdrop-blur-lg bg-white/20 dark:bg-black/20 border rounded-lg px-5 py-7 flex flex-col gap-y-4">
            <div class="flex flex-col gap-y-1">
                <label class="text-white">Full Name</label>
                <InputText  class="w-full"  placeholder="Full Name" v-model="form.fullName" />
            </div>
            <div class="flex flex-col gap-y-1">
                <label class="text-white">Email</label>
                <InputText  class="w-full" type="email" placeholder="Email" v-model="form.email" />
            </div>
            <div class="flex flex-col gap-y-1">
                <label class="text-white">Password</label>
                <Password class="w-full" v-model="form.password" placeholder="Password"  :feedback="false" toggleMask />
            </div>
            <div class="flex flex-col gap-y-1">
                <label class="text-white">Confirm Password</label>
                <Password class="w-full" v-model="form.confirmPassword" placeholder="Confirm Password"  :feedback="false" toggleMask />
            </div>
            <Button label="Sign up" type="submit" />
        </form>
    </div>
</template>

<script setup>
import { reactive , onMounted} from "vue";
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
const form = reactive({
  fullName: 'Durgan Genesis',
  email: 'durgan.genesis@example.com',
  password: 'password',
  confirmPassword: 'password',
})
</script>


