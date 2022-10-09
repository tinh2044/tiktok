import axios from 'axios';

export const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (api, option = {}) => {
    const response = await request.get(api, option);
    return response.data;
};
