import Home from '../views/HomeView.vue';
import IndexView from '../views/appliances/IndexView.vue';
import SingleAppliance from '../views/appliances/SingleView.vue';
import CreateAppliance from '../views/appliances/CreateView.vue';
import CreateReservation from '../views/reservations/CreateView.vue';

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/apparaten',
    name: 'index-appliances',
    component: IndexView,
  },
  {
    path: '/apparaten/:id',
    name: 'view-appliance',
    component: SingleAppliance,
    props: true,
  },
  {
    path: '/apparaten/nieuw',
    name: 'create-appliance',
    component: CreateAppliance,
  },
  {
    path: '/mijn-reservatie',
    name: 'create-reservation',
    component: CreateReservation,
  },
];
