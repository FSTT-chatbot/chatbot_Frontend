<template>
    <div class="h-screen w-full flex items-center justify-center bg-[#171717]">
        <div class="text-center flex flex-col items-center gap-y-3">
            <img class="w-16 object-contain" src="/vite.svg" alt="" srcset="">
            <h1 class="font-bold text-4xl">Welcome to Ai</h1>
            <h2 class="text-lg ">Log in with your account to continue</h2>
            <div class="flex items-center gap-x-4  justify-center ">
                <router-link to="/login" class="flex items-center justify-center bg-green-400 w-20 h-10 rounded-md hover:bg-green-300 transition-colors">Login</router-link>
                <router-link to="/signup" class="flex items-center justify-center bg-green-400 w-20 h-10 rounded-md hover:bg-green-300 transition-colors">Sign up</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

