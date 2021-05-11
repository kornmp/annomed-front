import axios from 'axios';

const API = axios.create({ baseURL: 'https://auth-prot1.herokuapp.com/' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('auth-token')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('auth-token')).token}`;
    }
  
    return req;
});

export const clientSignUp = (formData) => API.post('/api/user/register', formData);
export const clientSignIn = (formData) => API.post('/api/user/login', formData);