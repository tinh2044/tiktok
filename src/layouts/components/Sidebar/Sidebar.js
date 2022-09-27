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
import { dataFooter } from '~/data/Footer';
import Button from '~/layouts/Button';
const cx = classNames.bind(styles);

function Sidebar() {
    const { isLogin } = useContext(Login);
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            {!isLogin && (
                <div className={cx('login')}>
                    <p className={cx('header')}>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
                    <Button className={cx('login-btn')} outline large>
                        LOG IN
                    </Button>
                </div>
            )}
            <SuggestAccount label="Suggest Account" />

            <div className={cx('hashtag')}>
                <p className={cx('title')}>Khám phá</p>
                {SuggestHashtag.map((item, index) => (
                    <Hashtag key={index} data={item} className={cx('item')} />
                ))}
            </div>
            <footer className={cx('footer')}>
                {dataFooter.map((item, index) => {
                    return (
                        <div key={index} className={cx('footer-item')}>
                            {item.map((item, index) => {
                                return (
                                    <a className={cx('link')} href={item.link} target="_bank" key={index}>
                                        {item.title}
                                    </a>
                                );
                            })}
                        </div>
                    );
                })}
                <p>@2022 TikTok</p>
            </footer>
        </aside>
    );
}

export default Sidebar;
