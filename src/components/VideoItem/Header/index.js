import React, { useContext, useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import Image from '~/components/Image'
import { faCircleCheck, faMusic } from '@fortawesome/free-solid-svg-icons'
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/layouts/Button'
import AccountPreview from '~/components/AccuontPreview'
import { Modal } from '~/Context/ModalContext'
import { Login } from '~/Context/LoginContext'
import Hashtag from '~/components/Hashtag'

import classNames from 'classnames/bind'
import styles from './Header.module.scss'
const cx = classNames.bind(styles)
function Header({ user, music, desc }) {
    const { show } = useContext(Modal);
    const { isLogin } = useContext(Login);

    const [content, setContent] = useState('');
    const [listHashtag, setListHashTag] = useState([]);

    // Handle Content
    const handleContent = () => {
        if (desc.includes('#')) {
            setListHashTag(desc.split('#').slice(1));
            setContent(desc.substring(0, desc.indexOf('#')));
        } else setContent(desc);
    };

    useLayoutEffect(() => {
        handleContent();
    }, []);
    // Handle Play Video
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={user} />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <header className={cx('header')}>
            <div className={cx('desc')}>
                <Tippy
                    interactive
                    delay={[800, 0]}
                    render={renderPreview}
                    placement="bottom-start"
                    offset={[-18, -4]}
                >
                    <Image className={cx('avatar')} src={user.avatar} alt="" size="54px" />
                </Tippy>
                <div className={cx('content')}>
                    <Link to="/" className={cx('info')}>
                        <strong className={cx('nickname')}>{user.nickname}</strong>
                        {user.tick && <FontAwesomeIcon icon={faCircleCheck} className={cx('icon')} />}
                        <p className={cx('name')}>{user.first_name + user.last_name}</p>
                    </Link>
                    <p className={cx('text')}>
                        {content}
                        {listHashtag.map((item, index) => (
                            <Hashtag key={index} className={cx('hashtag')}>
                                {item}
                            </Hashtag>
                        ))}
                    </p>
                    <Link to="/" className={cx('music')}>
                        <FontAwesomeIcon icon={faMusic} className={cx('icon-music')} />
                        <p>{music}</p>
                    </Link>
                </div>
            </div>
            <div>
                <Button outline onClick={isLogin ? () => { } : show}>
                    Follow
                </Button>
            </div>
        </header>
    )
}

export default Header

