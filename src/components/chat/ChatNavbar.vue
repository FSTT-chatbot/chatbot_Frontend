<template>
    <div  class="h-16 shrink-0 bg-white shadow-sm dark:shadow-md dark:border-b dark:border-[#232323] dark:bg-[#171717] dark:text-white flex items-center justify-end px-5 relative">
        <div ref="menuElement" class="w-fit">

            <button @click="toggleMenu" class="outline-none focus:outline-none w-10 h-10 rounded-full bg-violet-500 p-1.5 ">
                <img class="w-full h-full object-contain" src="/avatar.png" alt="" srcset="">
            </button>
            <div v-if="showMenu"   class="absolute w-48 top-full right-5 translate-y-1 bg-white dark:bg-[#171717] rounded-md overflow-hidden
            border border-surface-200 dark:border-surface-600">
                <div class="p-2 flex flex-col divide-y dark:divide-surface-600">
                    <div class=" pb-2">
                        <button @click="toggleProfile" class="py-3 w-full px-4 flex items-center gap-x-2 rounded-md transition-colors
                        dark:hover:bg-neutral-700 hover:bg-gray-200">
                            <i class="fa-solid fa-user"></i>
                            <span>Profile</span>
                        </button>
                        <div class="w-full py-3 px-4 flex items-center justify-between gap-x-2 ">
                            <span>Dark mode</span>
                            <InputSwitch class="scale-75 origin-right" v-model="darkMode" />
                        </div>
                    </div>

                    <div class="pt-2">
                        <button class="outline-none focus:outline-none w-full py-3 px-4 flex items-center justify-between gap-x-2 rounded-md transition-colors
                        dark:hover:bg-neutral-700 hover:bg-gray-200">
                            <span>Logout</span>
                            <i class="fa-solid fa-right-from-bracket text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="showProfile" class=" ">
        <div class="absolute bottom-0 left-0 flex items-center justify-center w-full h-full">
    <Profile />
  </div>
</div>
</template>

<script setup>
import InputSwitch from 'primevue/inputswitch';
import useClickOutside from '@/composables/useClickOutside.js';
import {ref, reactive , onMounted, computed, watch} from "vue";
import Profile from './Profile.vue';
const darkMode = defineModel()
const menuElement = ref(false)
const showMenu = ref(false)
const showProfile = ref(false)


function toggleMenu(){
    showMenu.value = !showMenu.value
}

function toggleProfile(){
    showProfile.value = !showProfile.value
    console.log(showProfile.value)
}

useClickOutside(menuElement, () => {
    showMenu.value = false
});
// useClickOutside(menuElement, () => {
//     showProfile.value = false
//     console.log(showProfile.value)
// });
</script>

