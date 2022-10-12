import classNames from 'classnames/bind';

import { dataFooter } from '~/data/footer';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            {dataFooter.map((item, index) => {
                return (
                    <div key={index} className={cx('footer-item')}>
                        {item.map((item, index) => {
                            return (
                                <a className={cx('link')} href={item.link} target="_bank" key={index}>
                                    {item.title}
                                </a>
                            );
                        })}
                    </div>
                );
            })}
            <p>@2022 TikTok</p>
        </footer>
    );
}

export default Footer;
