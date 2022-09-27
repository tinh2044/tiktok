import classNames from 'classnames/bind';
import { Fragment } from 'react';
import { useForm } from '~/hooks';
import FormSignUp from '../FormSignUp';
import {
    FacebookIcon,
    GoogleIcon,
    InstagramIcon,
    TwitterIcon,
    QrCodeIcon,
    UserIcon,
    LineIcon,
    KaKaoTalkIcon,
    IosIcon,
} from '../icons';
import styles from './FormLogin.scss';
import FormLoginItem from './FormLoginItem';

const cx = classNames.bind(styles);
const listLogin = [
    {
        icon: <QrCodeIcon />,
        title: 'Use QR code',
    },
    {
        icon: <UserIcon />,
        title: 'Use phone / email / username',
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
    {
        icon: <IosIcon />,
        title: 'Continue with Apple',
        href: '#',
    },
    {
        icon: <InstagramIcon />,
        title: 'Continue with Instagram',
        href: '#',
    },
];
function FormLogin() {
    const { setForm } = useForm();
    return (
        <Fragment>
            <div className={cx('body')}>
                <h1 className={cx('header')}>Log in to TikTok</h1>
                {listLogin.map((item, index) => (
                    <FormLoginItem key={index} data={item} />
                ))}
            </div>
            <div className={cx('footer')}>
                <p className={cx('title')}>Don't have an account</p>
                <button className={cx('change')} onClick={() => setForm(<FormSignUp />)}>
                    Sign up
                </button>
            </div>
        </Fragment>
    );
}

export default FormLogin;
