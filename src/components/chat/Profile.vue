<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
    <template>
        <!-- <div class="w-screen min-h-screen flex items-center justify-center p-4 bg-gray-50">
           
        </div> -->
        <div class="flex flex-col bg-white dark:bg-neutral-700 dark:text-white shadow-xl px-11 rounded-lg mx-5 ">
                <div class="flex items-center h-16 pl-10 pr-6 border-b border-gray-200">
                    <span class="font-medium ">Settings</span>
                  <button class="ml-auto h-6 w-6 flex items-center justify-center hover:bg-gray-100">
                      <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                  </button>
                </div>
              <div class="h-2/3 max-h-full flex">
                  <div class="flex flex-shink-0 flex-col w-60 p-6">
                      <a class="w-full flex items-center h-12 px-4 text-sm hover:bg-gray-100 dark:hover:bg-neutral-800"
                         v-bind:class="{ 'bg-gray-100 dark:bg-neutral-700 font-medium': activeTab === 'general' }"
                         @click="setActiveTabToGeneral()" 
                         href="#">General</a>
                      <a class="w-full flex items-center h-12 px-4 text-sm hover:bg-gray-100" 
                         @click="setActiveTabToAppearance()" 
                         v-bind:class="{ 'bg-gray-100 dark:bg-neutral-700 font-medium': activeTab === 'appearance' }"
                         href="#">Appearance</a>
                      <a class="w-full flex items-center h-12 px-4 text-sm hover:bg-gray-100" 
                         @click="setActiveTabToProfile()" 
                         v-bind:class="{ 'bg-gray-100 dark:bg-neutral-700 font-medium': activeTab === 'profile' }"
                         href="#">Profile</a>
                      <a class="w-full flex items-center h-12 px-4 text-sm hover:bg-gray-100" 
                         @click="setActiveTabToSecurity()" 
                         v-bind:class="{ 'bg-gray-100 dark:bg-neutral-700 font-medium': activeTab === 'security' }"
                         href="#">Security</a>
                      <a class="w-full flex items-center h-12 px-4 text-sm hover:bg-gray-100" 
                         @click="setActiveTabToAccount()" 
                         v-bind:class="{ 'bg-gray-100 dark:bg-neutral-700 font-medium': activeTab === 'account' }"
                         href="#">Account</a>
                  </div>
                  <div v-if="activeTab === 'general'" class="h-96 py-10 flex-grow">
                      <h4 class="text-sm font-medium">General Settings</h4>
                      <div class="flex mt-8">
                          <div>
                              <input class="hidden" type="checkbox" id="toggle_1" value="1">
                              <label class="flex items-center justify-start w-10 border border-black h-6 p-1 rounded-full cursor-pointer" for="toggle_1">
                                  <span class="w-4 h-4 bg-black rounded-full"></span>
                              </label>
                          </div>
                          <span class="text-xs ml-4 mt-1">Lorem ipsum dolor sit amet.</span>
                      </div>
                      <div class="flex mt-4">
                          <div>
                              <input class="hidden" type="checkbox" id="toggle_1" value="1">
                              <label class="flex items-center justify-start w-10 border border-black h-6 p-1 rounded-full cursor-pointer" for="toggle_1">
                                  <span class="w-4 h-4 bg-black rounded-full"></span>
                              </label>
                          </div>
                          <span class="text-xs ml-4 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                      </div>
                  </div>
                  <div v-if="activeTab === 'appearance'"  class="h-96 py-10 flex-grow">
                      <h4 class="text-sm font-medium">Appearance Settings</h4>
                      <div class="flex mt-8 w-full">
                          <div>
                              <input class="hidden" type="checkbox" id="toggle_1" value="1">
                              <label class="flex items-center justify-start w-10 border border-black h-6 p-1 rounded-full cursor-pointer" for="toggle_1">
                                  <span class="w-4 h-4 bg-black rounded-full"></span>
                              </label>
                          </div>
                          <span class="text-xs ml-4 mt-1">Lorem ipsum dolor sit amet, consectetur.</span>
                      </div>
                      <div class="flex w-full flex-col mt-4">
                          <label class="text-xs font-medium" for="">Label</label>
                          <input type="text" class="w-1/2 py-1 border border-gray-300 mt-1">
                          <span class="text-xs  mt-1">Lorem ipsum dolor.</span>
                      </div>
                      <div class="flex w-full flex-col mt-4">
                          <label class="text-xs font-medium" for="">Label</label>
                          <input type="text" class="w-1/2 py-1 border border-gray-300 mt-1">
                          <span class="text-xs  mt-1">Lorem ipsum dolor.</span>
                      </div>
                  </div>
                  <div v-if="activeTab === 'profile'"  class="h-96 py-10">
                      <h4 class="text-sm font-medium">Profile Settings</h4>
                      <div class="flex mt-8">
                          <div>
                              <input class="hidden" type="checkbox" id="toggle_1" value="1">
                              <label class="flex items-center justify-start w-10 border border-black h-6 p-1 rounded-full cursor-pointer" for="toggle_1">
                                  <span class="w-4 h-4 bg-black rounded-full"></span>
                              </label>
                          </div>
                          <span class="text-xs ml-4 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</span>
                      </div>
                      <div class="flex mt-4">
                          <div>
                              <input class="hidden" type="checkbox" id="toggle_1" value="1">
                              <label class="flex items-center justify-start w-10 border border-black h-6 p-1 rounded-full cursor-pointer" for="toggle_1">
                                  <span class="w-4 h-4 bg-black rounded-full"></span>
                              </label>
                          </div>
                          <span class="text-xs ml-4 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                      </div>
                      <div class="flex w-full flex-col mt-4">
                          <label class="text-xs font-medium" for="">Label</label>
                          <input type="text" class="w-1/2 py-1 border border-gray-300 mt-1">
                          <span class="text-xs  mt-1">Lorem ipsum dolor.</span>
                      </div>
                  </div>
                  <div v-if="activeTab === 'security'"  class="h-96 py-10">
                      <h4 class="text-sm font-medium">Security Settings</h4>
                      <div class="flex mt-8">
                          <div>
                              <input class="hidden" type="checkbox" id="toggle_1" value="1">
                              <label class="flex items-center justify-start w-10 border border-black h-6 p-1 rounded-full cursor-pointer" for="toggle_1">
                                  <span class="w-4 h-4 bg-black rounded-full"></span>
                              </label>
                          </div>
                          <span class="text-xs ml-4 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</span>
                      </div>
                      <div class="flex mt-4">
                          <div>
                              <input class="hidden" type="checkbox" id="toggle_1" value="1">
                              <label class="flex items-center justify-start w-10 border border-black h-6 p-1 rounded-full cursor-pointer" for="toggle_1">
                                  <span class="w-4 h-4 bg-black rounded-full"></span>
                              </label>
                          </div>
                          <span class="text-xs ml-4 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                      </div>
                  </div>
                  <div v-if="activeTab === 'account'"  class="h-96 py-10">
                      <h4 class="text-sm font-medium">Account Settings</h4>
                      <div class="flex mt-8">
                          <div>
                              <input class="hidden" type="checkbox" id="toggle_1" value="1">
                              <label class="flex items-center justify-start w-10 border border-black h-6 p-1 rounded-full cursor-pointer" for="toggle_1">
                                  <span class="w-4 h-4 bg-black rounded-full"></span>
                              </label>
                          </div>
                          <span class="text-xs ml-4 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</span>
                      </div>
                      <div class="flex mt-4">
                          <div>
                              <input class="hidden" type="checkbox" id="toggle_1" value="1">
                              <label class="flex items-center justify-start w-10 border border-black h-6 p-1 rounded-full cursor-pointer" for="toggle_1">
                                  <span class="w-4 h-4 bg-black rounded-full"></span>
                              </label>
                          </div>
                          <span class="text-xs ml-4 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                      </div>
                  </div>
                  
              </div>
            </div>
      </template>
      
      <script>
      export default {
        data() {
          return {
            activeTab: 'general'
          };
        },
        methods: {
          doSomething() {
            alert('Hello!');
          },
          setActiveTabToGeneral() {
            this.activeTab = 'general'
            },
          setActiveTabToAppearance() {
            this.activeTab = 'appearance'
            },
          setActiveTabToProfile() {
            this.activeTab = 'profile'
            },
          setActiveTabToSecurity() {
            this.activeTab = 'security'
            },
          setActiveTabToAccount() {
            this.activeTab = 'account'
            },
        }
      };
      </script>
      
      <!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
      <style scoped>
          input[type="checkbox"]:checked + label {
              justify-content: flex-end;
              background-color: black;
          }
      
          input[type="checkbox"]:checked + label span {
              background-color: white;
          }
      </style>