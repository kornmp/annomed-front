import * as api from '../api/index.js';
import { returnErrors } from './error';

export const signup = (formData) => async (dispatch) => {
  try {

    console.log(formData);
    const { data } = await api.clientSignUp(formData);

    dispatch({ type: 'AUTH', data });

  } catch (error) {
    dispatch(
      returnErrors({error, type: 'REGISTER_FAIL'})
    );
  }
};


export const signin = (formData) => async (dispatch) => {
  try {
    const { data } = await api.clientSignIn(formData);

    dispatch({ type: 'AUTH', data });

  } catch (error) {
    dispatch(returnErrors({error, type: 'LOGIN_FAIL'})
    );
  }
};