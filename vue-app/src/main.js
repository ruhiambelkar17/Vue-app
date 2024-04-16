import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia';
import router from './router/Index';
import vue3GoogleLogin from 'vue3-google-login';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vue3GoogleLogin, {
    clientId: '1059135692246-donflb298kffrdko5el2j7fsk4q31umc.apps.googleusercontent.com'
  })


app.mount("#app");