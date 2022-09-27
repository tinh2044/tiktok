import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Fragment, useState } from 'react';
import { useForm } from '~/hooks';
import FormLogin from '../FormLogin';
import { FacebookIcon, GoogleIcon, TwitterIcon, UserIcon, LineIcon, KaKaoTalkIcon } from '../icons';
import styles from './FormSignUp.scss';
import FormSignUpItem from './FormSignUpItem';

const cx = classNames.bind(styles);
const listSignUp = [
    {
        icon: <UserIcon />,
        title: 'Use phone or email',
    },
    {
        icon: <FacebookIcon />,
        title: 'Continue with Facebook',
        href: '#',
    },
    {
        icon: <GoogleIcon />,
        title: 'Continue with Google',
        href: '#',
    },
    {
        icon: <TwitterIcon />,
        title: 'Continue with Twitter',
        href: '#',
    },
    {
        icon: <LineIcon />,
        title: 'Continue with Line',
        href: '#',
    },
    {
        icon: <KaKaoTalkIcon />,
        title: 'Continue with KakaoTalk',
        href: '#',
    },
];
function FormSignUp() {
    const [listItem, setListItem] = useState(listSignUp.slice(0, 3));
    const { setForm } = useForm();
    return (
        <Fragment>
            <div className={cx('body')}>
                <h1 className={cx('header')}>Sign Up to TikTok</h1>
                {listItem.map((item, index) => (
                    <FormSignUpItem key={index} data={item} />
                ))}
                {listItem.length < 4 && (
                    <button className={cx('more')} onClick={() => setListItem(listSignUp)}>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                )}
            </div>
            <p className={cx('text')}>
                By continuing, you agree to TikTok’s
                <a href="https://www.tiktok.com/legal/terms-of-service-row?lang=vi" className={cx('link')}>
                    Terms of Service
                </a>
                and confirm that you have read{' '}
                <a href="https://www.tiktok.com/legal/page/row/privacy-policy/en" className={cx('link')}>
                    TikTok’s Privacy
                </a>
                Policy.
            </p>
            <div className={cx('footer')}>
                <p className={cx('title')}>Already have an account</p>
                <button className={cx('change')} onClick={() => setForm(<FormLogin />)}>
                    Log in
                </button>
            </div>
        </Fragment>
    );
}

export default FormSignUp;
