import axios from 'axios';

const API_URL = 'http://localhost:8003/api/usuarios';

export const getUsuario = () => {
    return axios.get(API_URL);
};

export const getUsuarios = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

export const createUser = (usuario) => {
    return axios.post(API_URL, usuario);
};

export const updateUser = (id, usuario) => {
    return axios.put(`${API_URL}/${id}`, usuario);
};

export const deleteUser = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};
