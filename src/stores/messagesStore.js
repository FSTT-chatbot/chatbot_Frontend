import { defineStore } from 'pinia'
import axios from 'axios'

export const useMessagesStore = defineStore('messages', {
  state: () => ({
    messages: [],
    currentConversation:{id:'new', name:'new conversation'}, //{id:1, name:new currentConversation}
    conversations:[{id:'new', name:'new conversation'}],  //[{id:1, name:new currentConversation} .....]
  }),

  getters: {
    getMessages: (state) => state.messages,
    getCurrentConversation: (state) => state.currentConversation,
    getConversations: (state) => state.conversations,
  },

  actions: {
    
    setCurrentConversation (currentConversation){
        this.currentConversation = currentConversation
    },

    setMessages (data){
        this.messages = data
    },

    addMessage (message){
        this.messages.push(message)
    },

    setConversations (data){
        this.conversations = data
    },
    
    addConversation (message){
        this.conversations.unshift(message)
    },


    async sendMessage(message){
        try {
            if(this.currentConversation?.id !== 'new'){
                let result = await axios.post('/sendMessage/'+this.currentConversation.id,{
                    message:message
                })
                console.log('response',result );

                this.addMessage(result.data.user_message)
                this.addMessage(result.data.prompt_response)
            }else{

                let result = await axios.post('/createConversation',{
                    message:message
                })
                console.log('response',result );
                let conversationInArry = this.conversations.find(cnv => cnv.id === 'new')

                if(conversationInArry){
                    conversationInArry.name = result.data.conversation.name
                    conversationInArry.id = result.data.conversation.id
                }

                console.log('conversations',this.conversations );

                this.setCurrentConversation (result.data.conversation)
                this.addMessage(result.data.user_message)
                this.addMessage(result.data.prompt_response)
                
                // this.addMessage({content:'chatbot' ,content: result.data.prompt_response})
            }
        } catch (error) {
            console.log('error',error);
        }
          
            
        
    },
    
    async fetchConversationMessages(){
        if(this.currentConversation?.id !== 'new'){
            //** fetch currentConversation messages ***/
            try {
                let result = await axios.get('/messages/'+this.currentConversation?.id) 
                this.setMessages(result.data.messages)
                console.log("fetchconversatiomessage: ", result)
            } catch (error) {
                console.log('fetchConversationMessages error',error);
            }
        }
    },

    async fetchConversations(){
        try {
            //* fecht user conversations here *//
            let result = await axios.get('/conversations')
            this.setConversations(result.data.conversations)
            this.addConversation({id:'new', name:'new conversation'})
        } catch (error) {
            console.log('fetchConversations error',error)
        }
    },

    async newConversation(){
        let conversationInArry = this.conversations.find(cnv => cnv.id === 'new')
        if(this.currentConversation.id != 'new' && !conversationInArry){
            this.setMessages([])
            let conversation = {id:'new', name:'new conversation'}
            this.addConversation(conversation)
            this.setCurrentConversation(conversation)
        }
    }
  
  },
})