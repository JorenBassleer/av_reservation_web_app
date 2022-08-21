module.exports = [
    {
      path: '/',
      name: 'home',
      component: require('../views/HomeView.vue').default
    },
    {
        path: '/apparaten',
        name: 'index-appliances',
        component: require('../views/appliances/IndexView.vue').default
    },
    {
        path: '/apparaten/:id',
        name: 'view-appliance',
        component: require('../views/appliances/SingleView.vue').default,
        props: true
    },
    {
    path: '/apparaten/nieuw',
    name: 'create-appliance',
    component: require('../views/appliances/CreateView.vue').default,
    },
    {
    path: '/mijn-reservatie',
    name: 'create-reservation',
    component: require('../views/reservations/CreateView.vue').default,
    },
]