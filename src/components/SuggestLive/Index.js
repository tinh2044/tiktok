import classNames from 'classnames/bind';

import styles from './SuggestLive.module.scss';
import SuggestAccountLive from '~/data/SuggestAccountLive';
import Image from '../Image';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const cx = classNames.bind(styles);

function SuggestLive() {
    const [data, setData] = useState(SuggestAccountLive.slice(0, 5));
    const [isMore, setIsMore] = useState(false);
    return (
        <div className={cx('wrapper')}>
            <p className={cx('heading')}></p>
            {data.map((item, index) => (
                <Link to="/" key={index} className={cx('item')}>
                    <Image src={item.avatar} className={cx('avatar')} size="30px" />
                    <div className={cx('desc')}>
                        <h5 className={cx('nickname')}>{item.nickname}</h5>
                        <h6 className={cx('name')}>{item.name}</h6>
                    </div>
                    <p className={cx('watcher')}>{item.watcher}</p>
                </Link>
            ))}
            {isMore ? (
                <p
                    className={cx('more')}
                    onClick={() => {
                        setData(SuggestAccountLive.slice(0, 5));
                        setIsMore(false);
                    }}
                >
                    See less
                </p>
            ) : (
                <p
                    className={cx('less')}
                    onClick={() => {
                        setData(SuggestAccountLive);
                        setIsMore(true);
                    }}
                >
                    See more
                </p>
            )}
        </div>
    );
}

export default SuggestLive;
