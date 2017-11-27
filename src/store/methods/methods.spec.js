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

test(`Should increase count by 1`, t => {
  t.timeoutAfter(1000);
  t.plan(1);

  const state = {
    count: 0
  };

  class AppState extends Store {}
  Object.assign(AppState.prototype, methods);
  const store = new AppState(state);

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

  class AppState extends Store {}
  Object.assign(AppState.prototype, methods);
  const store = new AppState(state);

  store.decrement();
  t.equal(store.get('count'), -1);
  t.end();
});