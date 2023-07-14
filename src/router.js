import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue'

import ContactCoach from './pages/requests/ContactCoach.vue';
import ReceivedRequests from './pages/requests/ReceivedRequests.vue'

import NotFound from './pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachesList },
        { path: '/coaches/:id', component: CoachDetail, children: {
            path: 'contact', component: ContactCoach //coaches/<id>/contact
        } },
        { path: '/register', component: CoachRegistration },
        { path: '/requests', component: ReceivedRequests },
        { path: '/:notFound(.*)', component: NotFound }, //regular expression that catches anything out of the routes
    ],
});

export default router