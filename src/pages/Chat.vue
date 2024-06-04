<template>
    <div class="h-screen flex "  :class="{'dark':darkMode}">
        <ChatSidebar />
        <div class="grow flex flex-col">
            <ChatNavbar v-model="darkMode"/>
            <Conversation />
        
        </div>

    </div>
</template>

<script setup>
import ChatSidebar from '@/components/chat/ChatSidebar.vue'
import Conversation from '@/components/chat/Conversation.vue'
import ChatNavbar from '@/components/chat/ChatNavbar.vue'
import {ref, reactive , onMounted, computed, watch} from "vue";
const darkMode = ref(false)
watch(darkMode,val=>{
    localStorage.setItem('dark-mode', val);
})




const tempMessages = [
    {id:1, sender:'user', content:'1 user prompt user prompt  user prompt  user prompt  user prompt  user prompt  user prompt  user prompt '},
    {id:2, sender:'chatbot', content:'2 chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response '},
    {id:3, sender:'user', content:'3 user prompt user prompt  user prompt  user prompt  user prompt  user prompt  user prompt  user prompt '},
    {id:4, sender:'chatbot', content:'4 chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response '},
    {id:5, sender:'user', content:'5 user prompt user prompt  user prompt  user prompt  user prompt  user prompt  user prompt  user prompt '},
    {id:6, sender:'chatbot', content:'6 chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response '},
    {id:7, sender:'user', content:'7 user prompt user prompt  user prompt  user prompt  user prompt  user prompt  user prompt  user prompt '},
    {id:8, sender:'chatbot', content:'8 chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response '},
    {id:9, sender:'user', content:'9 user prompt user prompt  user prompt  user prompt  user prompt  user prompt  user prompt  user prompt '},
    {id:10, sender:'chatbot', content:'10 chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response '},
]


onMounted(() => {
    darkMode.value = localStorage.getItem('dark-mode') === 'true';
})
</script>

