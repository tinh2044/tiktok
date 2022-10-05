import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { BrandIcon, LogoIcon } from '~/components/icons';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('body')}>
                <div className={cx('logo')}>
                    <LogoIcon />
                    <BrandIcon />
                </div>
                <div className={cx('content')}>
                    <div className={cx('item')}>
                        <p className={cx('title')}>Company</p>
                        <a className={cx('link')} href="/">
                            toi
                        </a>
                    </div>
                </div>
            </div>
            <div className={cx('bottom')}>
                <div className={cx('language')}>
                    EngLish
                    <FontAwesomeIcon icon={faCaretDown} className={cx('icon')} />
                </div>
                <span>© 2022 TikTok</span>
            </div>
        </div>
    );
}

export default Footer;
