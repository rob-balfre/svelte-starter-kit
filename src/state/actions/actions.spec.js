const tape = require('tape');
const _ = require('./actions');

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

  const actions = _.actions(state);
  t.equal(actions.increment(state).count, 1);
  t.end();
});

test(`Should decrease count by 1`, t => {
  t.timeoutAfter(1000);
  t.plan(1);

  const state = {
    count: 0
  };

  const actions = _.actions(state);
  t.equal(actions.decrement(state).count, -1);
  t.end();
});