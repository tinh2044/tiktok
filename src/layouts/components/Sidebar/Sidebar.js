import classNames from 'classnames/bind';
import { useContext } from 'react';
import {
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
    UserGroupActiveIcon,
    UserGroupIcon,
} from '~/components/icons';

import { Login } from '~/Context/LoginContext';
import config from '~/config';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import styles from './Sidebar.module.scss';
import SuggestAccount from '~/components/SuggestedAccount';
import { SuggestHashtag } from '~/data/SuggestHashtag';
import Hashtag from '~/components/Hashtag';
import Button from '~/layouts/Button';
import { Modal } from '~/Context/ModalContext';
import Footer from '../Footer';
import SuggestLive from '~/components/SuggestLive/Index';
const cx = classNames.bind(styles);

function Sidebar() {
    const { show } = useContext(Modal);
    const { isLogin } = useContext(Login);
    let styleLive = window.location.pathname.includes('/live');
    if (styleLive) {
        document.documentElement.style.setProperty('--default-layout-width', '98%');
    } else {
        document.documentElement.style.setProperty('--default-layout-width', '1150px');
    }
    return (
        <div className={cx('wrapper')} style={{ width: styleLive ? '232px' : '356px' }}>
            <aside className={cx('sidebar')} style={{ width: styleLive ? '232px' : '356px' }}>
                <Menu>
                    <MenuItem
                        title="For You"
                        to={config.routes.home}
                        icon={<HomeIcon />}
                        activeIcon={<HomeActiveIcon />}
                    />
                    <MenuItem
                        title="Following"
                        to={config.routes.following}
                        icon={<UserGroupIcon />}
                        activeIcon={<UserGroupActiveIcon />}
                    />
                    <MenuItem
                        title="Live"
                        to={config.routes.live}
                        icon={<LiveIcon />}
                        activeIcon={<LiveActiveIcon />}
                    />
                </Menu>
                {!isLogin && (
                    <div className={cx('login')}>
                        <p className={cx('header')}>Log in to follow creators, like videos, and view comments.</p>
                        <Button className={cx('login-btn')} outline large onClick={show}>
                            LOG IN
                        </Button>
                    </div>
                )}
                {!styleLive ? <SuggestAccount label="Suggest Account" /> : <SuggestLive />}

                <div className={cx('hashtag')}>
                    <p className={cx('title')}>Discover</p>
                    {SuggestHashtag.map((item, index) => (
                        <Hashtag key={index} data={item} className={cx('item')} />
                    ))}
                </div>
                <Footer />
            </aside>
        </div>
    );
}

export default Sidebar;
