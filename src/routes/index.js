import { lazy } from 'react';

import config from '~/config';

// import HomePage from '~/pages/Home';
// import Following from '~/pages/Following';
// import Profile from '~/pages/Profile';
// import Upload from '~/pages/Upload';
// import Search from '~/pages/Search';
import { HeaderOnly } from '~/layouts';
import Live from '~/pages/Live';
const HomePage = lazy(() => import('~/pages/Home'));
const Following = lazy(() => import('~/pages/Following'));
const Profile = lazy(() => import('~/pages/Profile'));
const Upload = lazy(() => import('~/pages/Upload'));
// const Search = lazy(() => import('~/pages/Search'));
const publicRoutes = [
    {
        path: config.routes.home,
        component: HomePage,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.live,
        component: Live,
    },
];
const privateRoute = [];
export { publicRoutes, privateRoute };
