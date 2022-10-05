import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';

import styles from './LiveItem.module.scss';

const cx = classNames.bind(styles);

function LiveItem({ data, onClick }) {
    console.log(data);
    return (
        <div className={cx('wrapper')}>
            {data.map((item, index) => (
                <div key={index} className={cx('item')} onClick={() => onClick()}>
                    <Link className={cx('body')}>
                        <video className={cx('video')} src={item.video} />
                        <div className={cx('status')}>
                            <p className={cx('watcher')}>{item.watcher} viewer</p>
                            <span>Live</span>
                        </div>
                        <div className={cx('overlay')}></div>
                        <div className={cx('play')}>
                            <FontAwesomeIcon icon={faPlay} />
                        </div>
                    </Link>
                    <div className={cx('info')}>
                        <Image className={cx('avatar')} src={item.avatar} />
                        <div className={cx('desc')}>
                            <Link to="/" className={cx('title')}>
                                {item.title}
                            </Link>
                            <Link to="/" className={cx('nickname')}>
                                {item.nickname}
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default LiveItem;
