<template>
    <div class="h-[calc(100%-4rem)] dark:bg-[#171717] pt-2 dark:text-white w-full flex flex-col">
        <!-- <div class="w-full h-full flex flex-col"> -->
            <div class="overflow-y-auto px-4 grow mx-2 rounded-2xl dark:bg-[#212121] mb-2">
                <div v-if="messages?.length > 0" class="w-full flex flex-col gap-y-2 max-w-3xl mx-auto py-4  ">
                    <div v-for="message in messages" :key="message.id" class="w-full">
                        <!-- user prompt -->
                        <div v-if="message.sender === 'user'" class="bg-gray-100 dark:bg-[#303030] p-3 rounded-xl w-fit max-w-[75%] ml-auto">
                            {{message.content}}
                        </div>

                        <!-- chatbot response -->
                        <div v-else class="mb-3">
                            <div class="shrink-0 flex gap-x-4  p-3 rounded-xl w-fit max-w-[75%] shadow-md">
                                <!-- chatbot logo -->
                                <div class="shrink-0 w-10 h-10 rounded-full bg-white p-1.5 ">
                                    <img class="w-full h-full object-contain" src="/logo.png" alt="" srcset="">
                                </div>
                                <!-- respose content -->
                                <div class=""> {{message.content}}</div>
                            </div>

                            <!-- response action buttons -->
                            <div class="mr-auto w-36" >
                                <div class="ml-2 hover:border hover:border-[#303030] pl-3 flex flex-row gap-x-4 rounded-lg my-2 ">
                                    <button class="outline-none focus:outline-none hover:scale-110 transition-transform">
                                    <i class="fa-regular fa-copy text-lg"></i>
                                </button>
                                <button class="outline-none focus:outline-none hover:scale-110 transition-transform">
                                    <i class="fa-solid fa-repeat"></i>
                                </button>
                                <button class="outline-none focus:outline-none hover:scale-110 transition-transform">
                                    <i class="fa-solid fa-thumbs-up"></i>
                                </button>
                                <button class="outline-none focus:outline-none hover:scale-110 transition-transform">
                                    <i class="fa-solid fa-thumbs-down"></i>
                                </button>
                                
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <div v-if="messages?.length == 0">
                    
                </div>
            </div>

            <!-- chat input -->
            <div class=" shrink-0  w-full max-w-3xl  mx-auto px-4">
                <div class="bg-gray-100 dark:bg-[#212121] rounded-full overflow-hidden min-h-14 h-fit flex items-center py-2 px-2 gap-x-2">
                    <textarea @input="adjustHeight" ref="promptTextarea" v-model="messageContent" placeholder="Message ChatbotX" rows="1" class="border-none focus:ring-0 grow  bg-transparent focus:outline-none resize-none " ></textarea>
                    <button @click="sendMessage" class="focus:!outline-none flex rounded-full items-center justify-center bg-green-400 p-1.5 text-surface-200 hover:scale-110 transition-transform">
                        <svg class="size-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                    </button>
                </div>
                <div class="text-xs py-2 text-center">ChatbotX can make mistakes</div>
            </div>
    </div>
</template>

<script setup>
import {ref, reactive , onMounted, computed, watch} from "vue";
import {useMessagesStore} from '@/stores/messagesStore.js'
const messagesStore = useMessagesStore()
const conversation = computed(()=>messagesStore.getCurrentConversation)
const messages = computed(()=>messagesStore.getMessages)

const messageContent = ref(null)
watch(conversation, async ()=>{
    await messagesStore.fetchConversationMessages()
})

const promptTextarea = ref(null)
const maxHeight = 100
function adjustHeight() {
    promptTextarea.value.style.height = 'auto'
    // promptTextarea.value?.style.height = 'auto';
    let newHeight = Math.min(promptTextarea.value.scrollHeight, maxHeight);
    promptTextarea.value.style.height = newHeight + 'px';
    console.log(promptTextarea.value.style.height);

}

async function sendMessage(){
    await messagesStore.sendMessage(messageContent.value)
    messageContent.value = null
}


onMounted(() => {
    adjustHeight()
})
</script>
