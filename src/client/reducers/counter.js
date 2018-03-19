const TYPE_ADD = 'counter_add';

export default function reducer(state = { counter: 0 }, action = {}) {
  switch (action.type) {
    case TYPE_ADD:
      return {
        counter: state.counter + 1
      };
    default:
      return state;
  }
}

export function add() {
  return {
    type: TYPE_ADD
  };
}
