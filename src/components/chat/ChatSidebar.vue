<template>
        <!-- side bar -->
        <div v-if="Sidebar" class="w-64 shrink-0 bg-gray-100 dark:bg-[#212121] h-screen flex flex-col dark:text-white">
            <!-- side bar head -->
            <div class=" px-5 shrink-0 shadow-xl mx-auto rounded-b-lg  flex items-center justify-around gap-x-20 ">
                <router-link to="/" >
                <div class="flex flex-nowrap py-2 items-center ">
                <!-- <img class="w-10 object-contain" src="/logo.png" alt="" srcset=""> -->
                <h1 class="text-lg font-semibold">ChatBotX</h1>  
                </div>
                           
            </router-link>
            <div @click="toggleSidebar" class=" dark:hover:bg-[#3d3d3d]  p-2 rounded-xl ">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_914_3438" fill="white">
                        <rect x="11" y="9" width="9" height="11" rx="1"/>
                        </mask>
                        <rect x="11" y="9" width="9" height="11" rx="1" stroke="white" stroke-width="3" mask="url(#path-1-inside-1_914_3438)"/>
                        <mask id="path-2-inside-2_914_3438" fill="white">
                        <rect y="13" width="9" height="7" rx="1"/>
                        </mask>
                        <rect y="13" width="9" height="7" rx="1" stroke="white" stroke-width="3" mask="url(#path-2-inside-2_914_3438)"/>
                        <mask id="path-3-inside-3_914_3438" fill="white">
                        <rect width="9" height="11" rx="1"/>
                        </mask>
                        <rect width="9" height="11" rx="1" stroke="white" stroke-width="3" mask="url(#path-3-inside-3_914_3438)"/>
                        <mask id="path-4-inside-4_914_3438" fill="white">
                        <rect x="11" width="9" height="7" rx="1"/>
                        </mask>
                        <rect x="11" width="9" height="7" rx="1" stroke="white" stroke-width="3" mask="url(#path-4-inside-4_914_3438)"/>
                    </svg>
                </div>  
            </div>
            
            <!-- conversation history list-->
            <div class="grow flex flex-col  overflow-hidden">
                <div class="shrink-0 w-full px-3 py-4 ">
                    <button @click="newConversation" class="w-full outline-none focus:outline-none hover:bg-gray-300 dark:hover:bg-[#3d3d3d]  dark:bg-[#262626] transition-colors flex items-center  gap-x-2 p-2 rounded-md">
                        <!-- <i class="fa-solid fa-plus"></i> -->
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="#fff"  d="M8.2876 1.20947H6.6626C2.6001 1.20947 0.975098 2.87614 0.975098 7.04281V12.0428C0.975098 16.2095 2.6001 17.8761 6.6626 17.8761H11.5376C15.6001 17.8761 17.2251 16.2095 17.2251 12.0428V10.3761"  stroke-linecap="round" stroke-linejoin="round"/>
                        <path stroke="#fff"  d="M12.3829 2.05936L5.98037 8.62602C5.73662 8.87602 5.49287 9.36769 5.44412 9.72602L5.09474 12.2344C4.96474 13.1427 5.59037 13.776 6.47599 13.651L8.92162 13.2927C9.26287 13.2427 9.74224 12.9927 9.99412 12.7427L16.3966 6.17602C17.5016 5.04269 18.0216 3.72602 16.3966 2.05936C14.7716 0.392691 13.4879 0.926024 12.3829 2.05936Z"  stroke-miterlimit="20" stroke-linecap="round" stroke-linejoin="round"/>
                        <path stroke="#fff"  d="M11.4644 3.00098C12.0087 4.99264 13.5281 6.55098 15.4781 7.11764" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>New Conversation</span>
                    </button>
                </div>
                <div class="w-full px-3">
                    <div class="w-full  border-t border-surface-200 dark:border-surface-600"></div>
                </div>

                <div class="w-full grow overflow-y-auto p-2">

                    <!-- history conversation item -->
                    <div @click.stop="pickConversation(conversation)" v-for="conversation in conversations" :key="conversation.id"  :data-id="conversation.id"
                        class="my-2 conversation-history-item group rounded-md   px-1 py-2 cursor-pointer transition-colors relative
                            hover:bg-gray-300 dark:hover:bg-neutral-700"
                            :class="{'bg-gray-300 dark:bg-neutral-700': conversation.id === currentConversation.id}">
                        <!-- history conversation name  {{conversation.name}}-->
                        <div class=" truncate w-full overflow-hidden">{{conversation.name}}</div>
                        
                        <!-- history conversation options -->
                        <div @click.stop="setOpenChatMenu(conversation.id)" class="group-hover:bg-gray-400 dark:group-hover:bg-neutral-800
                        conversation-history-item-menu-button absolute group/menu rounded-md top-1 right-1 p-1 flex opacity-0 group-hover:opacity-100 items-center transition-opacity ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </div>

                        <!-- options menu -->
                        <div v-if="openChatMenu === conversation.id" 
                            class="conversation-history-item-menu z-10 absolute top-full right-0 flex flex-col mt-2 p-2 bg-gray-400 dark:bg-neutral-700 rounded-md ">
                            <button class="outline-none focus:outline-none  p-2 hover:bg-gray-300 dark:hover:bg-neutral-600  rounded-md flex items-center gap-x-2">
                                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C12.581 0 14.855 1.661 15.675 4.045C18.114 4.376 20 6.472 20 9C20 10.221 19.556 11.396 18.75 12.309C18.552 12.532 18.277 12.647 18 12.647C17.765 12.647 17.529 12.565 17.338 12.397C16.925 12.03 16.885 11.399 17.251 10.984C17.734 10.438 18 9.732 18 9C18 7.346 16.654 6 15 6H14.9C14.424 6 14.014 5.664 13.92 5.197C13.546 3.345 11.898 2 10 2C8.103 2 6.454 3.345 6.081 5.197C5.987 5.664 5.576 6 5.1 6H5C3.346 6 2 7.346 2 9C2 9.732 2.266 10.438 2.75 10.984C3.115 11.399 3.076 12.03 2.662 12.397C2.247 12.763 1.616 12.722 1.251 12.309C0.444 11.396 0 10.221 0 9C0 6.472 1.886 4.376 4.325 4.045C5.146 1.661 7.42 0 10 0ZM11.0004 14.6439L12.3054 13.3839C12.7034 13.0009 13.3364 13.0119 13.7194 13.4089C14.1034 13.8069 14.0924 14.4399 13.6954 14.8229L10.6954 17.7199C10.5004 17.9059 10.2504 17.9999 10.0004 17.9999C9.7444 17.9999 9.4884 17.9029 9.2934 17.7069L6.2934 14.7069C5.9024 14.3169 5.9024 13.6839 6.2934 13.2929C6.6834 12.9029 7.3164 12.9029 7.7074 13.2929L9.0004 14.5859V8.9999C9.0004 8.4469 9.4484 7.9999 10.0004 7.9999C10.5524 7.9999 11.0004 8.4469 11.0004 8.9999V14.6439Z" fill="white"/>
                                </svg>
                                <span>Download</span>
                            </button>
                            <button class="outline-none focus:outline-none  p-2 hover:bg-gray-300 dark:hover:bg-neutral-600  rounded-md flex items-center gap-x-2">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Icon/Outline/edit">
                                    <path id="Mask" fill-rule="evenodd" clip-rule="evenodd" d="M10.6791 7.1192L8.88244 5.32253L10.1811 4.0232L11.9771 5.8192L10.6791 7.1192ZM6.0531 11.7499L4.06843 11.9305L4.24443 9.95986L7.9891 6.2152L9.78644 8.01253L6.0531 11.7499ZM12.9358 4.89186L12.9351 4.8912L11.1098 3.06586C10.6158 2.5732 9.7671 2.54986 9.2991 3.01986L3.30177 9.0172C3.08443 9.23386 2.94977 9.52186 2.92177 9.82653L2.6691 12.6065C2.65177 12.8032 2.72177 12.9979 2.86177 13.1379C2.98777 13.2639 3.15777 13.3332 3.3331 13.3332C3.35377 13.3332 3.37377 13.3325 3.39377 13.3305L6.17377 13.0779C6.4791 13.0499 6.76644 12.9159 6.9831 12.6992L12.9811 6.7012C13.4664 6.21453 13.4458 5.40253 12.9358 4.89186Z" fill="white"/>
                                    </g>
                                </svg>
                                <span>Rename</span>
                            </button>
                            <button class="outline-none focus:outline-none text-red-500 p-2 hover:bg-gray-300 dark:hover:bg-neutral-600  rounded-md flex items-center gap-x-2">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.6077 5.81438e-09C8.28238 -4.53024e-05 8.93151 0.264707 9.42192 0.739946C9.91233 1.21518 10.2068 1.86488 10.245 2.55576L10.2491 2.70914H14.516C14.6704 2.70918 14.8191 2.76936 14.9319 2.8775C15.0448 2.98563 15.1134 3.13368 15.1239 3.29171C15.1345 3.44974 15.0861 3.60598 14.9887 3.72885C14.8912 3.85173 14.7519 3.93208 14.5989 3.95367L14.516 3.95951H13.8691L12.8287 14.8127C12.7766 15.3538 12.5387 15.8583 12.1574 16.236C11.7761 16.6138 11.2764 16.8403 10.7473 16.875L10.6043 16.88H4.61112C4.08078 16.88 3.56772 16.6865 3.16363 16.3342C2.75955 15.982 2.49078 15.4938 2.40534 14.9569L2.38665 14.8119L1.34553 3.95951H0.699399C0.5521 3.9595 0.409786 3.90479 0.298774 3.80549C0.187763 3.70619 0.115566 3.56902 0.0955329 3.41935L0.0898438 3.33432C0.08985 3.18324 0.143194 3.03728 0.240011 2.92342C0.336829 2.80957 0.470569 2.73552 0.6165 2.71497L0.699399 2.70914H4.96629C4.96629 1.99063 5.24458 1.30155 5.73994 0.793487C6.2353 0.285426 6.90715 5.81438e-09 7.6077 5.81438e-09V5.81438e-09ZM12.6443 3.95951H2.57033L3.60007 14.6893C3.62287 14.9288 3.72574 15.1527 3.89121 15.3232C4.05669 15.4937 4.27458 15.6002 4.5079 15.6246L4.61112 15.6296H10.6043C11.0919 15.6296 11.5056 15.2754 11.5999 14.7944L11.6161 14.6893L12.6434 3.95951H12.6443ZM9.02999 6.25185C9.17729 6.25186 9.31961 6.30657 9.43062 6.40587C9.54163 6.50517 9.61383 6.64234 9.63386 6.79201L9.63955 6.87704V12.7121C9.6395 12.8705 9.58083 13.023 9.4754 13.1387C9.36996 13.2545 9.22562 13.3248 9.07154 13.3356C8.91746 13.3464 8.76513 13.2968 8.64532 13.1969C8.52552 13.0969 8.44718 12.954 8.42613 12.7971L8.42044 12.7121V6.87704C8.42044 6.71123 8.48466 6.55221 8.59897 6.43496C8.71329 6.31772 8.86833 6.25185 9.02999 6.25185ZM6.1854 6.25185C6.3327 6.25186 6.47501 6.30657 6.58602 6.40587C6.69704 6.50517 6.76923 6.64234 6.78927 6.79201L6.79495 6.87704V12.7121C6.79491 12.8705 6.73624 13.023 6.6308 13.1387C6.52537 13.2545 6.38103 13.3248 6.22695 13.3356C6.07287 13.3464 5.92053 13.2968 5.80073 13.1969C5.68093 13.0969 5.60258 12.954 5.58153 12.7971L5.57584 12.7121V6.87704C5.57584 6.71123 5.64006 6.55221 5.75438 6.43496C5.86869 6.31772 6.02374 6.25185 6.1854 6.25185ZM7.6077 1.25037C7.25075 1.25038 6.90685 1.38805 6.64428 1.63605C6.38171 1.88405 6.21965 2.22424 6.19028 2.5891L6.1854 2.70914H9.02999C9.02999 2.32225 8.88014 1.9512 8.61341 1.67763C8.34668 1.40406 7.98491 1.25037 7.6077 1.25037Z" fill="#EF4444"/>
                                </svg>
                                <span>Delete</span>
                            </button>
                            
                            
                        </div>
                        
                    </div>
                  
                    
                </div>
            </div>

            

            

            <div class="shrink-0 py-2 px-2 dark:bg-[#262626] shadow-inner rounded-t-2xl">
                <div class="cursor-pointer hover:bg-neutral-700 transition-colors flex items-center gap-x-2 p-2 rounded-md">

                    <div class="w-10 h-10 rounded-full bg-violet-500 p-1.5 ">
                        <img class="w-full h-full object-contain" src="/avatar.png" alt="" srcset="">
                    </div>
                    <div>Adnane Riyadi</div>
                </div>
            </div>
        </div>
        <div v-if="Sidebar== false" class="h-screen bg-gray-100 dark:bg-[#212121] p-4 flex flex-col gap-y-6 ">
            <button @click="toggleSidebar" class=" dark:hover:bg-[#3d3d3d]  p-2 rounded-xl ">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_914_3438" fill="white">
                        <rect x="11" y="9" width="9" height="11" rx="1"/>
                        </mask>
                        <rect x="11" y="9" width="9" height="11" rx="1" stroke="white" stroke-width="3" mask="url(#path-1-inside-1_914_3438)"/>
                        <mask id="path-2-inside-2_914_3438" fill="white">
                        <rect y="13" width="9" height="7" rx="1"/>
                        </mask>
                        <rect y="13" width="9" height="7" rx="1" stroke="white" stroke-width="3" mask="url(#path-2-inside-2_914_3438)"/>
                        <mask id="path-3-inside-3_914_3438" fill="white">
                        <rect width="9" height="11" rx="1"/>
                        </mask>
                        <rect width="9" height="11" rx="1" stroke="white" stroke-width="3" mask="url(#path-3-inside-3_914_3438)"/>
                        <mask id="path-4-inside-4_914_3438" fill="white">
                        <rect x="11" width="9" height="7" rx="1"/>
                        </mask>
                        <rect x="11" width="9" height="7" rx="1" stroke="white" stroke-width="3" mask="url(#path-4-inside-4_914_3438)"/>
                    </svg>
            </button>
            <button @click="newConversation" class="w-full outline-none focus:outline-none hover:bg-gray-300 dark:hover:bg-[#3d3d3d]   transition-colors flex items-center  gap-x-2 p-2 rounded-md">
                        <!-- <i class="fa-solid fa-plus"></i> -->
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="#fff"  d="M8.2876 1.20947H6.6626C2.6001 1.20947 0.975098 2.87614 0.975098 7.04281V12.0428C0.975098 16.2095 2.6001 17.8761 6.6626 17.8761H11.5376C15.6001 17.8761 17.2251 16.2095 17.2251 12.0428V10.3761"  stroke-linecap="round" stroke-linejoin="round"/>
                        <path stroke="#fff"  d="M12.3829 2.05936L5.98037 8.62602C5.73662 8.87602 5.49287 9.36769 5.44412 9.72602L5.09474 12.2344C4.96474 13.1427 5.59037 13.776 6.47599 13.651L8.92162 13.2927C9.26287 13.2427 9.74224 12.9927 9.99412 12.7427L16.3966 6.17602C17.5016 5.04269 18.0216 3.72602 16.3966 2.05936C14.7716 0.392691 13.4879 0.926024 12.3829 2.05936Z"  stroke-miterlimit="20" stroke-linecap="round" stroke-linejoin="round"/>
                        <path stroke="#fff"  d="M11.4644 3.00098C12.0087 4.99264 13.5281 6.55098 15.4781 7.11764" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        
                    </button> 
        </div>
</template>

<script setup>
import {ref,onMounted,onBeforeUnmount, computed} from 'vue'
import {useMessagesStore} from '@/stores/messagesStore.js'
const messagesStore = useMessagesStore()
const conversations = computed(()=>messagesStore.getConversations)
const currentConversation = computed(()=>messagesStore.getCurrentConversation)


const openChatMenu = ref(null)
const Sidebar = ref(false)
const handleClickOutside = (event) => {
    let class1 = `.conversation-history-item-button`
    let class2 = `.conversation-history-item-menu`
    if(!event.target.closest(class1) && !event.target.closest(class2)){
        openChatMenu.value = null
    }
};

const  setOpenChatMenu = (id)=>{
    if(openChatMenu.value === id){openChatMenu.value =null}
    else{ openChatMenu.value = id}
}

function toggleSidebar(){
    Sidebar.value = !Sidebar.value
}
const pickConversation = async (id)=>{
    await messagesStore.setCurrentConversation(id)
}

const newConversation = async ()=>{
    await messagesStore.newConversation()
}


onMounted(async () => {
    await messagesStore.fetchConversations()
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>

