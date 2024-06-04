<template>
  <nav
    class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link
          class="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
          to="/"
        >
         ChatBotX
        </router-link>
        
      </div>
      <div
        class="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none"
        :class="[navbarOpen ? 'block rounded shadow-lg' : 'hidden']"
        id="example-navbar-warning"
      >
        
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          

          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-slate-200 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="https://github.com/creativetimofficial/vue-notus?ref=vn-auth-navbar"
              target="_blank"
            >
              <i
                class="lg:text-slate-200 text-slate-400 fab fa-github text-lg leading-lg"
              />
              <span class="lg:hidden inline-block ml-2">Star</span>
            </a>
          </li>

          <li class="flex items-center">
            <router-link to="/chat"
              class="bg-white text-slate-700 active:bg-slate-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
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
import PagesDropdown from "@/components/Dropdowns/PagesDropdown.vue";
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
    PagesDropdown,
  },
};
</script>
