import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/pais/:id',
      name: 'paises',
      component: () => import(/* webpackChunkName: "about" */ './views/paises-view.vue'),
    },
    {
      path: '/agregar',
      name: 'agregar',
      component: () => import(/* webpackChunkName: "about" */ './views/agregar-view.vue'),
    },
    // Esto de (redirect) no sirve, porque hay un (/:id) y lo que tome de valor si existira porque sera tomado como el valor que espera. 
    // Asi que Si quieres redirigir la pagina tienes que hacerlo con codigo.
    {path:'*', redirect:'/'}
  ],
});
