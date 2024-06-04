<template>
  <div>
    <index-navbar />
    <section
      class="header relative pt-16 items-center flex h-screen max-h-860-px"
    >
      <div class="container mx-auto items-center flex flex-wrap">
        <div class="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div class="pt-32 sm:pt-0">
            <h2 class="font-semibold text-4xl text-slate-600">
              Introducing ChatBotX - Your Intelligent FSTT Assistant
            </h2>
            <p class="mt-4 text-lg leading-relaxed text-slate-500">
              ChatBotX is a cutting-edge chatbot meticulously crafted for FSTT academic contexts, fine-tuned to cater to the specific needs of students and researchers. ChatBotX offers a seamless and intuitive user experience.
              
            </p>
            <div class="mt-12">
              <router-link to="/chat"
                class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-emerald-500 active:bg-emerald-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Get started
              </router-link>
              <!-- /documentation -->
              <router-link to="/"
                class="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-slate-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Documentation
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <img
        class="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
        :src="patternVue"
        alt="..."
      />
    </section>

    <section class="mt-48 md:mt-40 pb-40 relative bg-slate-100">
      <div
        class="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
        style="transform: translateZ(0);"
      >
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            class="text-slate-100 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div class="container mx-auto">
        <div class="flex flex-wrap items-center">
          <div
            class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32"
          >
            <div
              class="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-emerald-500"
            >
              <img
                alt="..."
                src="/170803491.jpeg"
                class="w-full align-middle rounded-t-lg"
              />
              <blockquote class="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  class="absolute left-0 w-full block h-95-px -top-94-px"
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    class="text-emerald-500 fill-current"
                  ></polygon>
                </svg>
                <h4 class="text-xl font-bold text-white">
                  Your ticket to Understand Anything About FST
                </h4>
                <p class="text-md font-light mt-2 text-white">
                  Putting together a page has never been easier than matching
                  together pre-made components. From landing pages presentation
                  to login areas, you can easily customise and built your pages.
                </p>
              </blockquote>
            </div>
          </div>

          <div class="w-full md:w-6/12 px-4">
            <div class="flex flex-wrap">
              <div class="w-full md:w-6/12 px-4">
                <div class="relative flex flex-col mt-4">
                  <div class="px-4 py-5 flex-auto">
                    <div
                      class="text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                    >
                      <i class="fas fa-sitemap"></i>
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">
                      Comprehensive Knowledge Base
                    </h6>
                    <p class="mb-4 text-slate-500">
                      ChatBotX comes pre-loaded with a vast repository of academic knowledge, spanning diverse subjects and disciplines. From FST de Tanger courses to general academic resources, ChatBotX provides accurate and relevant information at your fingertips.
                    </p>
                  </div>
                </div>
                <div class="relative flex flex-col min-w-0">
                  <div class="px-4 py-5 flex-auto">
                    <div
                      class="text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                    >
                      <i class="fas fa-drafting-compass"></i>
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">
                      Sample Conversations
                    </h6>
                    <p class="mb-4 text-slate-500">
                      Explore ChatBotX's capabilities with sample conversations that showcase its ability to handle complex queries and provide insightful responses. Whether you're seeking information on course syllabi, research methodologies, or academic events, ChatBotX delivers accurate and timely assistance.
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-6/12 px-4">
                <div class="relative flex flex-col min-w-0 mt-4">
                  <div class="px-4 py-5 flex-auto">
                    <div
                      class="text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                    >
                      <i class="fas fa-newspaper"></i>
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">User-Friendly Interface</h6>
                    <p class="mb-4 text-slate-500">
                      ChatBotX boasts a sleek and intuitive user interface, designed to enhance user experience and streamline interactions. With easy-to-navigate menus and clear prompts, ChatBotX ensures a seamless user journey from start to finish.
                    </p>
                  </div>
                </div>
                <div class="relative flex flex-col min-w-0">
                  <div class="px-4 py-5 flex-auto">
                    <div
                      class="text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                    >
                      <i class="fas fa-file-alt"></i>
                    </div>
                    <h6 class="text-xl mb-1 font-semibold">
                      Documentation
                    </h6>
                    <p class="mb-4 text-slate-500">
                      Backed by comprehensive documentation, ChatBotX is built by developers for Everyone. Whether you're integrating ChatBotX into your existing platform or customizing its functionality, you'll appreciate the simplicity and clarity of our chatbot.

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="container mx-auto overflow-hidden pb-20">
        <div class="flex flex-wrap items-center">
          <div class="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
            <div
              class="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
            >
              <i class="fas fa-sitemap text-xl"></i>
            </div>
            <h3 class="text-3xl mb-2 font-semibold leading-normal">
              Comprehensive Knowledge Base
            </h3>
            <p
              class="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600"
            >
            ChatBotX comes pre-loaded with a vast repository of academic knowledge,
            spanning diverse subjects and disciplines. From FST Tangier courses to general academic resources,
            ChatBotX provides accurate and relevant information at your fingertips.
            </p>
            <div class="block pb-6">
              <span
                class="text-xs font-semibold inline-block py-1 px-2  rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Courses
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2  rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Curriculum
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2  rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Staff
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2  rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Professor
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2  rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Programs
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2  rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Science
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2  rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Documents
              </span>
          
            </div>
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vn-index"
              target="_blank"
              class="font-bold text-slate-700 hover:text-slate-500 ease-linear transition-all duration-150"
            >
              View All
              <i class="fa fa-angle-double-right ml-1 leading-relaxed"></i>
            </a> 
          </div>

          <div class="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
            <div
              class="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0"
            >
              <img
                alt="..."
                :src="componentBtn"
                class="w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3"
              />
              <img
                alt="..."
                :src="componentProfileCard"
                class="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"
              />
              <img
                alt="..."
                :src="componentInfoCard"
                class="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2"
              />
              <img
                alt="..."
                :src="componentInfo2"
                class="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
              />
              <img
                alt="..."
                :src="componentMenu"
                class="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
              />
              <img
                alt="..."
                :src="componentBtnPink"
                class="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-wrap items-center pt-32">
          <div class="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
            <div class="justify-center flex flex-wrap relative">
              <div class="my-4 w-full lg:w-6/12 px-4">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div class="bg-red-600 shadow-lg rounded-lg text-center p-8">
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Svelte
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      ReactJS
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-slate-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      NextJS
                    </p>
                  </div>
                </a>
              </div>
              <div class="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-yellow-500 shadow-lg rounded-lg text-center p-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      JavaScript
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Angular
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      Vue.js
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div class="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
            <div
              class="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
            >
              <i class="fas fa-drafting-compass text-xl"></i>
            </div>
            <h3 class="text-3xl mb-2 font-semibold leading-normal">
              Javascript Components
            </h3>
            <p
              class="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600"
            >
              In order to create a great User Experience some components require
              JavaScript. In this way you can manipulate the elements on the
              page and give more options to your users.
            </p>
            <p
              class="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600"
            >
              We created a set of Components that are dynamic and come to help
              you.
            </p>
            <div class="block pb-6">
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Alerts
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Dropdowns
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Menus
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Modals
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Navbars
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Popovers
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Tabs
              </span>
              <span
                class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2"
              >
                Tooltips
              </span>
            </div>
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vn-index"
              target="_blank"
              class="font-bold text-slate-700 hover:text-slate-500 ease-linear transition-all duration-150"
            >
              View all
              <i class="fa fa-angle-double-right ml-1 leading-relaxed"></i>
            </a>
          </div>
        </div>
      </div> -->

      <div class="container mx-auto px-4 pb-32 pt-48">
        <div class="items-center flex flex-wrap">
          <div class="w-full md:w-5/12 ml-auto px-12 md:px-4">
            <div class="md:pr-12">
              <div
                class="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
              >
                <i class="fas fa-file-alt text-xl"></i>
              </div>
              <h3 class="text-3xl font-semibold">
                Full Documentation
              </h3>
              <p class="mt-4 text-lg leading-relaxed text-slate-500">
                The ChatbotX comes a lot of usage examples that help you
                get started faster. You can adjust the questions to gather most of the needed
                data
              </p>
              <ul class="list-none mt-6">
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-slate-50 mr-3"
                      >
                        <i class="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 class="text-slate-500">
                        Built by Students for Students
                      </h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-slate-50 mr-3"
                      >
                        <i class="fab fa-html5"></i>
                      </span>
                    </div>
                    <div>
                      <h4 class="text-slate-500">
                        Carefully crafted code for Quality
                      </h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-slate-50 mr-3"
                      >
                        <i class="far fa-paper-plane"></i>
                      </span>
                    </div>
                    <div>
                      <h4 class="text-slate-500">
                        Dynamic And Quick responses
                      </h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
            <img
              alt="..."
              class="max-w-full rounded-lg shadow-xl"
              style="
                transform: scale(1) perspective(1040px) rotateY(-11deg)
                  rotateX(2deg) rotate(2deg);
              "
              src="/doc.png"
            />
          </div>
        </div>
      </div>

      
    </section>

   

    <section class="py-10 bg-slate-600 overflow-hidden">
      <div class="container mx-auto py-10">
        <div class="flex flex-wrap justify-center">
          <div class="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto ">
            <div
              class="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
            >
              <i class="fas fa-code-branch text-xl"></i>
            </div>
            <h3 class="text-3xl mb-2 font-semibold leading-normal text-white">
              Open Source
            </h3>
            <p
              class="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-400"
            >
              
              <a
                href="https://tailwindcss.com/?ref=creativetim"
                class="text-slate-300"
                target="_blank"
              >
                ChatbotX
              </a>
              is an open source project. As we believe in the right to learn.
              You can check our githb repo, give the project a try and contribute or test
              the quality of the code!
            </p>
            <p
              class="text-lg font-light leading-relaxed mt-0 mb-4 text-slate-400"
            >
              Check it on Github and please help us with a
              Star!
            </p>
            <a
              href="https://github.com/FSTT-chatbot"
              target="_blank"
              class="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-slate-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
            >
              Github Star
            </a>
          </div>

          <div class="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
            <i
              class="fab fa-github text-slate-700 text-55 absolute -top-150-px -right-100 left-auto opacity-80"
            ></i>
          </div>
        </div>
      </div>
    </section>

    <section class="pb-16 bg-slate-200 relative pt-16">
      <div
        class="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
        style="transform: translateZ(0);"
      >
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            class="text-slate-200 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      
    </section>
    <footer-component />
  </div>
</template>
<script>
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";

import patternVue from "@/assets/img/pattern_vue2.png";
// import componentBtn from "@/assets/img/component-btn.png";
// import componentProfileCard from "@/assets/img/component-profile-card.png";
// import componentInfoCard from "@/assets/img/component-info-card.png";
// import componentInfo2 from "@/assets/img/component-info-2.png";
// import componentMenu from "@/assets/img/component-menu.png";
// import componentBtnPink from "@/assets/img/component-btn-pink.png";
// import documentation from "@/assets/img/documentation.png";
import login from "@/assets/img/login.jpg";
// import profile from "@/assets/img/profile.jpg";
// import landing from "@/assets/img/landing.jpg";

export default {
  data() {
    return {
      patternVue,
      // componentBtn,
      // componentProfileCard,
      // componentInfoCard,
      // componentInfo2,
      // componentMenu,
      // componentBtnPink,
      // documentation,
      login,
      // profile,
      // landing,
    };
  },
  components: {
    IndexNavbar,
    FooterComponent,
  },
};
</script>
