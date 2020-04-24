import store from '../index';

const { state: initState, reducers } = store;

const todoApp = function (state = initState, action) {
  if (action && action.type && reducers[action.type] && typeof reducers[action.type] === 'function') {
    return reducers[action.type](state, action);
  }
  return state;
};
export default todoApp;
