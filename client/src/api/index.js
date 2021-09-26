import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

//  ???????????????????????????????????????????????
//  verifier authorisation de l'utilisateur avant de le laisser passer
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

export const fetchDemandes = () => API.get('/demandes');

export const createDemande = (newDemande) => API.post('/demandes', newDemande);//post

//patcher le retour de la bd et structurer en fonction d'une url
export const updateDemande = (id, updatedDemande) => API.patch(`/demandes/${id}`, updatedDemande);

export const deleteDemande = (id) => API.delete(`/demandes/${id}`);

//like
export const likeDemande = (id) => API.patch(`/demandes/${id}/likeDemande`);



export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);




/*
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

export const fetchDemandes = () => API.get('/demandes');

export const createDemande = (newDemande) => API.demande('/demandes', newDemande);//post

//patcher le retour de la bd et structurer en fonction d'une url
export const updateDemande = (id, updatedDemande) => API.patch(`/demandes/${id}`, updatedDemande);

export const deleteDemande = (id) => API.delete(`/demandes/${id}`);

//like
export const likeDemande = (id) => API.patch(`/demandes/${id}/likeDemande`);



export const signIn = (formData) => API.demande('/user/signin', formData);
export const signUp = (formData) => API.demande('/user/signup', formData);







*/




















/*
const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsByCreator = (name) => API.get(`/posts/creator?name=${name}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, { value });
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
*/