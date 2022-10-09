import * as request from '~/untils/request';

export const VideoApi = async (page = 1, type = 'for-you') => {
    try {
        const res = await request.get('videos', {
            params: {
                page,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
