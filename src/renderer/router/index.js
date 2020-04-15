import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'software-page',
      component: require('@/components/SoftwarePage').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
