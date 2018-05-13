import { fromJS } from 'immutable';

const initialState = fromJS({
  cave: 'is open',
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_SESAME':
      return state.set('cave', 'is open');
    case 'CLOSE_SESAME':
      return state.set('cave', 'is closed');
    default:
      return state;
  }
};
