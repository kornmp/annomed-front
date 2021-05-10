import { FETCH_ALL, CREATE } from '../constants/actionTypes';

export default (projects = [], action)=> {
    switch (action.type) {
        case FETCH_ALL:
            return action.playload;
        case CREATE:
            return [...projects, action.payload];
        default:
            return projects;
    }
};