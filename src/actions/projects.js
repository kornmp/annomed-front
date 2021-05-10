import { FETCH_ALL, CREATE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getProjects = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProjects();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createProject = (post) => async (dispatch) => {
  try {
    const { data } = await api.createProject(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};