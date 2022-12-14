import {
    faCircleCheck,
    faCommentDots,
    faHeart,
    faMusic,
    faPause,
    faPlay,
    faShare,
    faVolumeHigh,
    faVolumeXmark,
    faCode,
    faShareNodes,
    faLink,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faWhatsapp, faTwitter, faTelegram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useState, useRef, useContext, useMemo } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import Image from '~/components/Image';
import Button from '~/layouts/Button';
import Hashtag from '../Hashtag';
import styles from './VideoItem.module.scss';
import AccountPreview from '~/components/AccuontPreview';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { Vol } from '~/Context/VolContext';
import { Play } from '~/Context/PlayContext';
import Share from '~/components/Share';
import { Modal } from '~/Context/ModalContext';
import { Login } from '~/Context/LoginContext';
import { useLayoutEffect } from 'react';
const cx = classNames.bind(styles);
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

function VideoItem({ data }) {
    const { user } = data;
    const { playVideo, setPlayVideo } = useContext(Play);
    const { volume, setVolume } = useContext(Vol);
    const videoRef = useRef(null);
    const [isPlay, setIstPlay] = useState(false);
    const { show } = useContext(Modal);
    const { isLogin } = useContext(Login);
    const [content, setContent] = useState('');
    const [listHashtag, setListHashTag] = useState([]);
    // Handle Content
    const handleContent = () => {
        let desc = data.description;
        if (desc.includes('#')) {
            setListHashTag(desc.split('#').slice(1));
            setContent(desc.substring(0, desc.indexOf('#')));
        } else setContent(desc);
    };
    useLayoutEffect(() => {
        handleContent();
    }, []);
    useMemo(() => {
        if (playVideo && videoRef.current !== null) {
            if (playVideo === data.id) {
                videoRef.current.play();
            } else {
                setIstPlay(false);
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [playVideo]);
    const handlePlayOrPause = () => {
        if (isPlay) {
            videoRef.current.pause();
        } else {
            setPlayVideo(data.id);
            videoRef.current.play();
        }
        return setIstPlay(!isPlay);
    };
    const handleChangeVol = (e) => {
        const vol = e.target.value / 100;
        setVolume(vol);
    };
    const handleVol = () => {
        if (volume > 0) {
            setVolume(0);
        } else {
            setVolume(1);
        }
    };
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={user} />
                </PopperWrapper>
            </div>
        );
    };
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
        <div className={cx('wrapper')}>
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
                            <p>{data.music}</p>
                        </Link>
                    </div>
                </div>
                <div>
                    <Button outline onClick={isLogin ? () => {} : show}>
                        Follow
                    </Button>
                </div>
            </header>
            <div className={cx('main')}>
                <div className={cx('place-video')}>
                    <video
                        onTimeUpdate={(e) => {
                            e.target.volume = volume;
                        }}
                        onClick={handlePlayOrPause}
                        ref={videoRef}
                        className={cx('video')}
                        src={data.file_url}
                        onEnded={(e) => {
                            e.target.currentTime = 0;
                            e.target.play();
                        }}
                    />
                    <div className={cx('action')}>
                        <button className={cx('play-or-pause')} onClick={handlePlayOrPause}>
                            {isPlay ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                        </button>
                        <div className={cx('volume')}>
                            <div className={cx('volume-bar')}>
                                <input type="range" min="0" max="100" value={volume * 100} onChange={handleChangeVol} />
                            </div>
                            <button className={cx('vol-icon')} onClick={handleVol}>
                                {volume > 0 ? (
                                    <FontAwesomeIcon icon={faVolumeHigh} />
                                ) : (
                                    <FontAwesomeIcon icon={faVolumeXmark} />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div className={cx('place-interactive')}>
                    <button className={cx('heart')}>
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                    <p className={cx('quantity')}>{data.likes_count}</p>
                    <button className={cx('comment')}>
                        <FontAwesomeIcon icon={faCommentDots} />
                    </button>
                    <p className={cx('quantity')}>{data.comments_count}</p>
                    <Tippy interactive render={renderShare} placement="top-start" offset={[-20, 4]} delay={[0, 400]}>
                        <button className={cx('share')}>
                            <FontAwesomeIcon icon={faShare} />
                        </button>
                    </Tippy>
                    <p className={cx('quantity')}>{data.shares_count}</p>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;
