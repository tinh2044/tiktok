import PropTypes from 'prop-types';
import className from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Header from '~/layouts/components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import PlayContext from '~/Context/PlayContext';
import VolContext from '~/Context/VolContext';
import DownloadApp from '../../components/DownloadApp';
import { memo } from 'react';
const cx = className.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    <PlayContext>
                        <VolContext> {children}</VolContext>
                    </PlayContext>
                </div>
            </div>
            <DownloadApp />
            <div className={cx('loading')}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default memo(DefaultLayout);
