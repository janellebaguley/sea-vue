import Vue from 'vue';
import Router from 'vue-router';
import HomeBase from './components/HomeBase.vue'
import ContactEmail from './components/ContactEmail.vue'
import DocsPdf from './components/DocsPdf.vue'
import EventsPricing from './components/EventsPricing.vue'
import FrequentlyAsked from './components/FrequentlyAsked.vue'
import GalleryMer from './components/GalleryMer.vue'
import PoliciesMer from './components/PoliciesMer.vue'
import PsychicMer from './components/PsychicMer.vue'
import ShopMer from './components/ShopMer.vue'
import MeetMer from './components/MeetMer.vue'


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
            name: 'HomeBase',
            component: HomeBase,
        },
        {
            path: '/contact',
            name: 'ContactEmail',
            component: ContactEmail,
        },
        {
            path: '/docs',
            name: 'DocsPdf',
            component: DocsPdf,
        },
        {
            path: '/events',
            name: 'EventsPricing',
            component: EventsPricing,
        },
        {
            path: '/meet',
            name: 'MeetMer',
            component: MeetMer,
        },
        {
            path: '/faq',
            name: 'FrequentlyAsked',
            component: FrequentlyAsked,
        },
        {
            path: '/gallery',
            name: 'GalleryMer',
            component: GalleryMer,
        },
        {
            path: '/policies',
            name: 'PoliciesMer',
            component: PoliciesMer,
        },
        {
            path: '/psychic',
            name: 'PsychicMer',
            component: PsychicMer,
        },
        {
            path: '/mer-chandise',
            name: 'ShopMer',
            component: ShopMer,
        },
    ]
});