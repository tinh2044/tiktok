import classNames from 'classnames/bind';
import { UserGroupIcon } from '~/components/icons';
import Image from '~/components/Image';

import styles from './Live.module.scss';
import LiveItem from './LiveItem';

const cx = classNames.bind(styles);

function Live() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('main')}>
                <div className={cx('place-live')}>
                    <header className={cx('header')}>
                        <div className={cx('desc')}>
                            <Image
                                size="40px"
                                className={cx('avatar')}
                                src="https://tse2.mm.bing.net/th?id=OIP.GL5EUnwXhAWvL9xFBaRIYQHaEk&pid=Api&P=0"
                            />
                            <div className={cx('info')}>
                                <h5 className={cx('nickname')}>chi {'is live now'}</h5>
                                <h6 className={cx('name')}>Nguyen Chi Tinh</h6>
                            </div>
                        </div>
                        <div className={cx('watcher')}>
                            <UserGroupIcon />
                            <span>4</span>
                            <p>Live</p>
                        </div>
                    </header>
                    <video
                        className={cx('live')}
                        src="https://v16-webapp.tiktok.com/0f79294afa5f68a55b5ca5c41daa8ff4/633b41d6/video/tos/useast2a/tos-useast2a-pve-0037-aiso/ca9f87eb2d7649a685ccca9aaa455074/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=1154&bt=577&cs=0&ds=3&ft=z_piDPWT2NvjV1BvxozfuaYQFAe4nRQjl63.LeOB&mime_type=video_mp4&qs=0&rc=MzY6aDk4O2czOGc3OWdoZ0Bpamk2bTo6ZjduZjMzZjgzM0AxYS01NTJfNjMxNTBiLzNiYSMuaS0zcjRnaDJgLS1kL2Nzcw%3D%3D&l=202210031410370102510651020A05E822&btag=80000"
                    />
                    <button className={cx('btn-watch')}>WATCH</button>
                </div>
                <div className={cx('suggest')}>
                    <div className={cx('item')}>
                        <video
                            className={cx('video')}
                            src="https://v16-webapp.tiktok.com/0f79294afa5f68a55b5ca5c41daa8ff4/633b41d6/video/tos/useast2a/tos-useast2a-pve-0037-aiso/ca9f87eb2d7649a685ccca9aaa455074/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=1154&bt=577&cs=0&ds=3&ft=z_piDPWT2NvjV1BvxozfuaYQFAe4nRQjl63.LeOB&mime_type=video_mp4&qs=0&rc=MzY6aDk4O2czOGc3OWdoZ0Bpamk2bTo6ZjduZjMzZjgzM0AxYS01NTJfNjMxNTBiLzNiYSMuaS0zcjRnaDJgLS1kL2Nzcw%3D%3D&l=202210031410370102510651020A05E822&btag=80000"
                        />
                        <h5 className={cx('title')}>come</h5>
                    </div>
                </div>
            </div>
            <div className={cx('recommend')}>
                <h2 className={cx('heading')}>Recommend LIVE Videos</h2>
                <LiveItem />
            </div>
        </div>
    );
}

export default Live;
