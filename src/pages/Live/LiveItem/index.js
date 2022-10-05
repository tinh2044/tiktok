import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';

import styles from './LiveItem.module.scss';

const cx = classNames.bind(styles);

function LiveItem({ data, onClick }) {
    return (
        <div className={cx('item')} onClick={() => onClick(data)}>
            <Link className={cx('body')}>
                <video className={cx('video')} src={data.video} />
                <div className={cx('status')}>
                    <p className={cx('watcher')}>{data.watcher} viewer</p>
                    <span>Live</span>
                </div>
                <div className={cx('overlay')}></div>
                <div className={cx('play')}>
                    <FontAwesomeIcon icon={faPlay} />
                </div>
            </Link>
            <div className={cx('info')}>
                <Image className={cx('avatar')} src={data.avatar} />
                <div className={cx('desc')}>
                    <Link to="/" className={cx('title')}>
                        {data.title}
                    </Link>
                    <Link to="/" className={cx('nickname')}>
                        {data.nickname}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LiveItem;
