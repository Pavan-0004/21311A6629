import axios from 'axios';

const API_BASE_URL = 'http://your-backend-api';

export const getAllProducts = (filters, sorting, page, pageSize) => {
    return axios.get(`${API_BASE_URL}/products`, {
        params: { ...filters, ...sorting, page, pageSize }
    });
};

export const getProductById = (id) => {
    return axios.get(`${API_BASE_URL}/products/${id}`);
};
