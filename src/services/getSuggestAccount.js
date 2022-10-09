import * as request from '~/untils/request';

export const getAccount = async (page = 1, perPage = 5) => {
    try {
        const res = await request.get('users/suggested', {
            params: {
                page,
                per_page: perPage,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
