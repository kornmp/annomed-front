import * as actionType from '../constants/actionTypes';

const auth = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

      return { ...state, authData: action.data, loading: false, errors: null };

    default:
      return state;
  }
};

export default auth;