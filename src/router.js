import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import Docs from './components/Docs.vue'
import Events from './components/Events.vue'
import FAQ from './components/FAQ.vue'
import Gallery from './components/Gallery.vue'
import Policies from './components/Policies.vue'
import Psychic from './components/Psychic.vue'
import Shop from './components/Shop.vue'
import Meet from './components/Meet.vue'


Vue.use(Router);

// function guardMyroute(to, from, next) {
//     let isAuthenticated = false;

//     if (localStorage.getItem('token')) isAuthenticated = true;
//     else isAuthenticated = false;
//     if (isAuthenticated) {
//         next();
//     } else {
//         next('/home'); //     }
// }



export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact,
        },
        {
            path: '/docs',
            name: 'Docs',
            component: Docs,
        },
        {
            path: '/events',
            name: 'Events',
            component: Events,
        },
        {
            path: '/meet',
            name: 'Meet',
            component: Meet,
        },
        {
            path: '/faq',
            name: 'FAQ',
            component: FAQ,
        },
        {
            path: '/gallery',
            name: 'Gallery',
            component: Gallery,
        },
        {
            path: '/policies',
            name: 'Policies',
            component: Policies,
        },
        {
            path: '/psychic',
            name: 'Psychic',
            component: Psychic,
        },
        {
            path: '/shop',
            name: 'Shop',
            component: Shop,
        },
    ]
});