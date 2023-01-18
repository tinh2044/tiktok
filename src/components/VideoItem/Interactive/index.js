import React from 'react'
import classNames from 'classnames/bind'
import styles from './Interactive.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faCommentDots, faEnvelope, faHeart, faLink, faShare, faShareNodes } from '@fortawesome/free-solid-svg-icons'

import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Share from '~/components/Share'
import { faFacebookF, faLinkedinIn, faTelegram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const cx = classNames.bind(styles)

const ListShare = [
    {
        icon: <FontAwesomeIcon icon={faCode} />,
        title: 'Embed',
        bgc: '#161823',
    },
    {
        icon: <FontAwesomeIcon icon={faShareNodes} />,
        title: 'Send to friends',
        bgc: 'rgb(254, 44, 85)',
    },
    {
        icon: <FontAwesomeIcon icon={faFacebookF} />,
        title: 'Share to facebook',
        bgc: '#20d5ec',
    },
    {
        icon: <FontAwesomeIcon icon={faWhatsapp} />,
        title: 'Share to whatsApp',
        bgc: 'rgb(37, 211, 102)',
    },
    {
        icon: <FontAwesomeIcon icon={faLink} />,
        title: 'Copy link',
        bgc: 'rgb(254, 44, 85)',
    },
    {
        icon: <FontAwesomeIcon icon={faTwitter} />,
        title: 'Share to twitter',
        bgc: 'rgb(29, 161, 242)',
    },
    {
        icon: <FontAwesomeIcon icon={faLinkedinIn} />,
        title: 'Share to linked',
        bgc: 'rgb(10, 102, 194)',
    },
    {
        icon: <FontAwesomeIcon icon={faTelegram} />,
        title: 'Share to Telegram',
        bgc: 'rgb(29, 161, 242)',
    },
    {
        icon: <FontAwesomeIcon icon={faEnvelope} />,
        title: 'Share to whatsApp',
        bgc: 'rgb(29, 161, 242)',
    },
];
function Interactive({ likesCount, commentCount, sharesCount }) {



    const renderShare = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <Share data={ListShare} />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div className={cx('place-interactive')}>
            <button className={cx('heart')}>
                <FontAwesomeIcon icon={faHeart} />
            </button>
            <p className={cx('quantity')}>{likesCount}</p>
            <button className={cx('comment')}>
                <FontAwesomeIcon icon={faCommentDots} />
            </button>
            <p className={cx('quantity')}>{commentCount}</p>
            <Tippy interactive render={renderShare} placement="top-start" offset={[-20, 4]} delay={[0, 400]}>
                <button className={cx('share')}>
                    <FontAwesomeIcon icon={faShare} />
                </button>
            </Tippy>
            <p className={cx('quantity')}>{sharesCount}</p>
        </div>
    )
}

export default Interactive
