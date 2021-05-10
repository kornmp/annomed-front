import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signup = (formData) => async (dispatch) => {
  try {

    console.log(formData);
    const { data } = await api.workerSignUp(formData);

    dispatch({ type: AUTH, data });

  } catch (error) {
    console.log(error);
  }
};

export const signin = (formData) => async (dispatch) => {
  try {
    const { data } = await api.workerSignIn(formData);

    dispatch({ type: AUTH, data });

  } catch (error) {
    console.log(error);
  }
};