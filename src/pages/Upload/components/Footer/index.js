import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { BrandIcon, LogoIcon } from '~/components/icons';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);
const dataFooter = [
    {
        title: 'Company',
        data: [
            { title: 'About', link: 'https://www.tiktok.com/about?lang=en' },
            { title: 'TikTok Browse', link: 'https://www.tiktok.com/browse' },
            { title: 'Newsroom', link: 'https://newsroom.tiktok.com/en-us/' },
            { title: 'Contact', link: 'https://www.tiktok.com/about/contact?lang=en' },
            { title: 'Careers', link: 'https://careers.tiktok.com/' },
            { title: 'ByteDance', link: 'https://www.bytedance.com/' },
        ],
    },
    {
        title: 'Programs',
        data: [
            { title: 'TikTok for Good', link: 'https://www.tiktok.com/forgood' },
            {
                title: 'Advertise',
                link: 'https://www.tiktok.com/business/vi?attr_source=tt_official_site&attr_medium=tt_official_site_guidance&refer=tiktok_web&tt4b_lang_redirect=1',
            },
            { title: 'Developers', link: 'https://developers.tiktok.com/?refer=tiktok_web' },
            { title: 'TikTok Rewards', link: 'https://www.tiktok.com/tiktok-rewards/eligibility/' },
        ],
    },
    {
        title: 'Support',
        data: [
            { title: 'Help Center', link: 'https://support.tiktok.com/en' },
            { title: 'Safety Center', link: 'https://www.tiktok.com/safety/en/' },
            { title: 'Creator Portal', link: 'https://www.tiktok.com/creators/creator-portal/en-us/' },
            { title: 'Community Guidelines', link: 'https://www.tiktok.com/community-guidelines?lang=en' },
            { title: 'Transparency', link: 'https://www.tiktok.com/transparency/en/' },
            { title: 'Accessibility', link: 'https://www.tiktok.com/accessibility/' },
        ],
    },
    {
        title: 'Legal',
        data: [
            { title: 'Terms of Use', link: 'https://www.tiktok.com/legal/terms-of-service-row?lang=en' },
            { title: 'Privacy Policy', link: 'https://www.tiktok.com/legal/page/row/privacy-policy/en' },
        ],
    },
];
function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('body')}>
                <div className={cx('logo')}>
                    <LogoIcon />
                    <BrandIcon />
                </div>
                <div className={cx('content')}>
                    {dataFooter.map((item, index) => (
                        <div key={index} className={cx('item')}>
                            <p className={cx('title')}>{item.title}</p>
                            {item.data.map((data, index) => (
                                <a key={index} className={cx('link')} href={data.link}>
                                    {data.title}
                                </a>
                            ))}
                        </div>
                    ))}
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
