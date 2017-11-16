import createStore  from 'redux-zero';

const initialState = {
  count: 0,
  username: 'Derek'
};
const store = createStore(initialState);

export default store;