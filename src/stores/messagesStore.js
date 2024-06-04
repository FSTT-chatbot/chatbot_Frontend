import { defineStore } from 'pinia'
import axios from 'axios'

export const useMessagesStore = defineStore('messages', {
  state: () => ({
    messages: [],
    currentConversation:null, //{id:1, name:new currentConversation}
    conversations:[],  //[{id:1, name:new currentConversation} .....]
  }),
  getters: {
    getMessages: (state) => state.messages,
    getCurrentConversation: (state) => state.currentConversation,
    getConversations: (state) => state.conversations,
  },
  actions: {
    setCurrentConversation (currentConversation){
        this.currentConversation = currentConversation
        console.log('this.currentConversation',this.currentConversation);
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
        this.conversations.push(message)
    },


    async sendMessage(conversatio_id, message){
        try {
            
            //** send a message to chatbot ***/
            // let chatbotResponse = await axios.post('/chatbot/messaging,{
            //     promp:message
            // })
            
            //** store the prompt message ***/
            // let result1 = await axios.post('/messages/conversatio_id,{
            //     message:message
            // })
            // this.addMessage(message)

            //** store the chatBot response message ***/
            // let result1 = await axios.post('/messages/conversatio_id,{
            //     message:chatbotResponse.data.message
            // })
            // this.addMessage(chatbotResponse.data.message)

            
            this.addMessage(message)
            this.addMessage('chatbot response chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response  chatbot response ')
            
        } catch (error) {
            console.log('messages error',error)
        }
    },
    
    async fetchConversationMessages(conversatio_id){
        try {
            if(conversatio_id){
                console.log('fetching');

                //** fetch currentConversation messages ***/
                // let result = await axios.get('/messages/'+conversatio_id+'.json') 
                fetch('messages/'+conversatio_id+'.json')
                .then(response => response.json())
                .then(data => {
                    console.log('result',data);
                    this.setMessages(data)
                })
                .catch(error=>{
                    this.setMessages([])
                })
                
            }
            

        } catch (error) {
            console.log('messages error',error)
        }
    },

    async fetchConversations(){
        try {
            //* fecht user conversations here *//
            //let result = axios.get(/conversations)
            //this.setConversations(result.data.conversations)

            fetch('conversations.json')
                .then(response => response.json())
                .then(data => {
                    console.log('result',data);
                    this.setConversations(data)
                })
                .catch(error=>{
                    console.log('conversations error', error);
                    this.setConversations([])
                })
            // this.setConversations([
            //     {id:1, name:'conversation 1'},
            //     {id:2, name:'conversation 2'},
            //     {id:3, name:'conversation 3'},
            //     {id:4, name:'conversation 4'},
            //     {id:5, name:'conversation 5'},
            //     {id:6, name:'conversation 6'},
            //     {id:7, name:'conversation 7'},
            //     {id:8, name:'conversation 8'},
            // ])
            await this.newConversation()

        } catch (error) {
            console.log('messages error',error)
        }
    },

    async newConversation(){
        try {
            // create new currentConversation in the back end and return it
            // let result = axios.post(/conversations/createNew)
            // this.addConversation(result.data.conversation)
            // this.setCurrentConversation(result.data.conversation)
            this.setMessages([])
            // this.setconversationId()
            let id = Math.floor(Math.random() * 10000000) + 500;
            let conversation = {id:id, name:'new conversation '+id}
            this.addConversation(conversation)
            this.setCurrentConversation(conversation)

        } catch (error) {
            console.log('messages error',error)
        }
    }


  
  },
})