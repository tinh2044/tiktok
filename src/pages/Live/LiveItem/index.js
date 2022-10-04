import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';

import styles from './LiveItem.module.scss';

const cx = classNames.bind(styles);

function LiveItem() {
    return (
        <div className={cx('wrapper')}>
            <Link className={cx('main')}>
                <video
                    className={cx('video')}
                    src="https://v16-webapp.tiktok.com/5acc8693fc38f7d947711092d5156785/633b3992/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/7774b0c1860a4f37b090e120836582fb/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=1700&bt=850&cs=0&ds=3&ft=TkXt216WvjVQ9z1VfPTsddcw4i_a7uwQAIk~nvcya9&mime_type=video_mp4&qs=0&rc=O2RkaDw0NzlmZWY0OmY5ZUBpamU7bDo6Zm07PDMzZjgzM0A1L2AxLjViXzIxNmEuM19gYSMwMWNucjRvZHJgLS1kL2Nzcw%3D%3D&l=202210031335360102450990020207A96C&btag=80000"
                />
                <div className={cx('status')}>
                    <p className={cx('watcher')}>123 viewer</p>
                    <span>Live</span>
                </div>
                <div className={cx('overlay')}></div>
                <div className={cx('play')}>
                    <FontAwesomeIcon icon={faPlay} />
                </div>
            </Link>
            <div className={cx('info')}>
                <Image
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/0dee2b6b7ae9f3da7346f6b7e47d27b8~c5_100x100.jpeg?x-expires=1664974800&x-signature=HUL1MI3L9MVyldTYzYkv8p46LAg%3D"
                />
                <div className={cx('desc')}>
                    <Link to="/" className={cx('title')}>
                        come with me
                    </Link>
                    <Link to="/" className={cx('nickname')}>
                        teo
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LiveItem;
