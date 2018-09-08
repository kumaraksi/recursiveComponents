import ACTIONS from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.REQUEST_HEIRARCHY:
      return { ...state, heirarchy: [] };
    case ACTIONS.RECEIVE_HEIRARCHY:
      return { ...state, heirarchy: action.heirarchy };
    default:
      return { ...state };
  }
};
