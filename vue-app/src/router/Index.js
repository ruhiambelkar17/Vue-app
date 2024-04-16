import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import ContactUs from '../views/ContactUs.vue';

const router =createRouter({
    history:createWebHistory(),
    mode:'history',
    routes:[
        {
            path: '/',
      name: 'home',
      component: Home,
        },
        {
            path:'/contact-us',
            name:'contact-us',
            component:ContactUs
        }
    ]
})

export default router;