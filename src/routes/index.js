import roadtrip from 'roadtrip';
import store from '../store';
import {checkUserActive} from '../helpers';

function setRoute(routeName) {
  store.set({
    routePath: routeName
  });
}

function setParam(key, val) {
  store.set({
    ['routeParam' + key]: val
  })
}

function authCheck() {
  if (!checkUserActive()) {
    roadtrip.goto('/sign-in');
  }
}

const routes = () => {
  roadtrip
    .add('/', {
      enter: function (route, previousRoute) {
        setRoute('home');
      }
    })

    .add('/sign-in', {
      enter: function (route, previousRoute) {
        setRoute('sign-in');
      }
    })

    .add('/counter', {
      enter: function (route, previousRoute) {
        setRoute('counter');
      }
    })

    .add('/dashboard', {
      beforeenter: function (route) {
        authCheck();
      },
      enter: function (route, previousRoute) {
        setRoute('dashboard');
      }
    })

    .add('/dashboard/user/:id', {
      beforeenter: function (route) {
        authCheck();
      },
      enter: function (route, previousRoute) {
        setRoute('dashboard');
        setParam('UserId', route.params.id);
      },
      update: function (route) {
        setParam('UserId', route.params.id);
      },
    })

    .start({
      fallback: '/'
    })
};

export default routes;