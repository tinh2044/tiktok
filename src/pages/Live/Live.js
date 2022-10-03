import classNames from 'classnames/bind';
import Image from '~/components/Image';

import styles from './Live.module.scss';

const cx = classNames.bind(styles);

function Live() {
    return (
        <div className={cx('live')}>
            <div className={cx('main')}>
                <div className={cx('place-live')}>
                    <header className={cx('header')}>
                        <div className={cx('desc')}>
                            <Image />
                            <div className={cx('info')}>
                                <h5 className={cx('nickname')}></h5>
                                <h6 className={cx('name')}></h6>
                            </div>
                        </div>
                        <div className={cx('watcher')}></div>
                    </header>
                </div>
                <div className={cx('suggest')}>
                    <div className={cx('item')}>
                        <video className={cx('video')} />
                        <h5 className={cx('nickname')}></h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Live;
