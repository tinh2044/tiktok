import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faGear,
    faCoins,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; //
import { useContext } from 'react';

import config from '~/config';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/layouts/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/icons';
import Image from '~/components/Image';
import Search from '../Search';
import { Modal } from '~/Context/ModalContext';
import { Login } from '~/Context/LoginContext';
const cx = classNames.bind(styles);

const MenuDefault = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@hoangmy',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get Coins',
        to: '/coin',
    },
    ...MenuDefault,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        onChange: (func = () => {}) => func(),
        separate: true,
    },
];

function Header() {
    const { show } = useContext(Modal);
    const { isLogin } = useContext(Login);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link className={cx('logo-link')} to={config.routes.home}>
                    <img src={images.logo} alt="tiktok" />
                </Link>
                {/* Search */}
                <Search />
                <div className={cx('action')}>
                    {isLogin ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload">
                                <Link to={config.routes.upload} className={cx('action-btn')}>
                                    <UploadIcon />
                                </Link>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button onClick={show} text>
                                Upload
                            </Button>
                            <Button onClick={show} primary>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={isLogin ? userMenu : MenuDefault} isLogin={isLogin}>
                        {isLogin ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://img4.thuthuatphanmem.vn/uploads/2020/05/07/anh-cute-dang-yeu_093403118.jpg"
                                alt="Nguyen Chi Tinh"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
