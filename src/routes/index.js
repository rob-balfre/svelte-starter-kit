import roadtrip from 'roadtrip';
import store from '../store';
import {checkUserActive} from '../helpers';

function setRoute(routeName) {
  store.set({
    routePath: routeName
  });
}

function setParams(key, val) {
  store.set({
    ['routeParam' + key]: val
  })
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
      enter: function (route, previousRoute) {
        if (checkUserActive()) {
          setRoute('dashboard');
        } else {
          roadtrip.goto( '/sign-in' );
        }
      }
    })

    .add('/dashboard/user/:id', {
      enter: function (route, previousRoute) {
        setRoute('dashboard');
        setParams('UserId', route.params.id);
      },
      update: function (route) {
        setParams('UserId', route.params.id);
      },
    })

    .start({
      fallback: '/'
    })
};

export default routes;