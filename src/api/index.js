import axios from 'axios';

const API = axios.create({ baseURL: 'https://annomed-ever.herokuapp.com/' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
});

export const fetchProjects = () => API.get('/projects');
export const createProject = (newProject) => API.post('/projects', newProject);

export const workerSignUp = (formData) => API.post('/worker/signup', formData);
export const workerSignIn = (formData) => API.post('/worker/signin', formData);

export const clientSignUp = (formData) => API.post('/client/signup', formData);
export const clientSignIn = (formData) => API.post('/client/signin', formData);