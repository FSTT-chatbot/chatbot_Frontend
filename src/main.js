import { createApp,markRaw } from 'vue'
import './assets/styles/prime.scss'
import "@fortawesome/fontawesome-free/css/all.min.css";
import './assets/styles/tailwind.scss'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Lara from '@/presets/lara';   
import authPlugin from '@/plugins/auth'

const app = createApp(App)
const pinia = createPinia()
pinia.use(({ store }) => {
    store.$router = markRaw(router)
});

app.use(PrimeVue, {
    unstyled: false,
    pt: Lara                          
});
app.use(pinia);
app.use(authPlugin);
app.use(router);

app.mount('#app')