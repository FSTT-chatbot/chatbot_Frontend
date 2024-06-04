<template>
  <nav
    class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link to="/">
          <a
            class="text-slate-700 text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            href="#pablo"
          >
            ChatBotX
          </a>
        </router-link>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="setNavbarOpen"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center"
        :class="[navbarOpen ? 'block' : 'hidden']"
        id="example-navbar-warning"
      >
        
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          
          

          <li class="flex items-center">
            <a
              class="hover:text-slate-500 text-slate-700 px-3 py-2 flex items-center text-xs uppercase font-bold"
              href="https://github.com/FSTT-chatbot"
              target="_blank"
            >
              <i class="text-slate-400 fab fa-github text-lg leading-lg" />
              <span class="lg:hidden inline-block ml-2">Star</span>
            </a>
          </li>

          <li class="flex items-center">
            <router-link to="/chat"
              class="bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
              type="button"
            >
               Get Started
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import IndexDropdown from "@/components/Dropdowns/IndexDropdown.vue";

export default {
  data() {
    return {
      navbarOpen: false,
    };
  },
  methods: {
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },
  },
  components: {
    IndexDropdown,
  },
};
</script>
