import axios from 'axios';

export const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (api, option = {}) => {
    const response = await request.get(api, option);
    return response.data;
};
