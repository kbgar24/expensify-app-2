import { createStore } from 'redux';

// Action Generators - return Action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count } = {}) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET',
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      }
    case 'RESET':
      return {
        count: 0
      }
    case 'SET':
      const count = action.count === undefined ? state.count : action.count;
      return {
        count
      }
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {console.log(store.getState())});

// Action - object that gets sent to store describing action to take

// increment, decrement, reset
store.dispatch(incrementCount());

store.dispatch(decrementCount(5));

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(setCount({count: 100}));
