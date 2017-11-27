import Counter from '../components/Counter/Counter.html';
import Home from '../components/Home/Home.html';

export default function (stateRouter) {
  stateRouter.addState({
    name: 'home',
    route: '/',
    template: Home
  });

  stateRouter.addState({
    name: 'counter',
    route: '/counter',
    template: Counter,
  })
};