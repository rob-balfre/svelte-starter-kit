import tape from 'tape';
import { Store } from 'svelte/store.js';
import methods from './index';

const test = (description, fn) => tape(description, t => {
  try {
    fn(t)
  } catch (e) {
    t.error(e);
    t.end()
  }
});

function createStore(state) {
  class AppState extends Store {}
  Object.assign(AppState.prototype, methods);
  return new AppState(state);
}

test(`Should increase count by 1`, t => {
  t.timeoutAfter(1000);
  t.plan(1);

  const state = {
    count: 0
  };

  const store = createStore(state);
  store.increment();
  t.equal(store.get('count'), 1);
  t.end();
});

test(`Should decrease count by 1`, t => {
  t.timeoutAfter(1000);
  t.plan(1);

  const state = {
    count: 0
  };

  const store = createStore(state);
  store.decrement();
  t.equal(store.get('count'), -1);
  t.end();
});