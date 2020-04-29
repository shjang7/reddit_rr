import { SET_ALERT, REMOVE_ALERT } from '../common/types';

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter(data => data.id !== payload);
    default:
      return state;
  }
}
