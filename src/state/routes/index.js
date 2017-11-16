import Counter from '../../components/Counter/Counter.html';

export default function (stateRouter) {
  stateRouter.addState({
    name: 'counter',
    route: '/counter',
    template: Counter,
  })
};