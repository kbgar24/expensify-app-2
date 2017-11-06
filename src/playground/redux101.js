import { createStore } from 'redux';

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
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});


store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 5
});

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'DECREMENT'
});


store.dispatch({
  type: 'SET'
  // count: 101
});
