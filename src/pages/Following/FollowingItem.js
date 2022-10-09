import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import Image from '~/components/Image';
import Button from '~/layouts/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useContext, useRef } from 'react';
import { Vol } from '~/Context/VolContext';
import { Modal } from '~/Context/ModalContext';

const cx = classNames.bind(styles);
function FollowingItem({ data }) {
    const { user } = data;
    const { show } = useContext(Modal);
    const { volume } = useContext(Vol);
    const videoRef = useRef();
    return (
        <Link to="/following">
            <div
                className={cx('item')}
                onMouseMove={() => {
                    videoRef && videoRef.current.play();
                }}
                onMouseOut={() => {
                    videoRef && videoRef.current.pause();
                }}
            >
                <video
                    className={cx('video')}
                    src={data.popular_video.file_url}
                    onTimeUpdate={(e) => {
                        e.target.volume = volume;
                    }}
                    ref={videoRef}
                />
                <div className={cx('desc')}>
                    <Image src={data.avatar} className={cx('avatar')} size={'48px'} />
                    <h5 className={cx('name')}>{data.first_name + data.last_name}</h5>
                    <h6 className={cx('nickname')}>
                        {data.nickname}
                        {data.tick && (
                            <span className={cx('tick')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                            </span>
                        )}
                    </h6>
                    <Button primary className={cx('btn')} onClick={show}>
                        Follow
                    </Button>
                </div>
            </div>
        </Link>
    );
}

export default FollowingItem;
