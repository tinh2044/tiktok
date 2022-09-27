import * as request from '~/untils/request';

export const searchApi = async (q, type = 'less') => {
    try {
        const res = await request.get('users/search', {
            params: {
                q,
                type,
            },
        });
        console.log(res);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
