import classNames from 'classnames/bind';
import { Fragment } from 'react';
import { useForm } from '~/hooks';
import FormLoginPhone from '../FormLoginPhone';
import FormSignUp from '../FormSignUp';
import FormLoginUser from '../FormLoginQr';
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
} from '~/components/icons';
import styles from './FormLogin.module.scss';
import FormLoginItem from './FormLoginItem';

const cx = classNames.bind(styles);
const listLogin = [
    {
        icon: <QrCodeIcon />,
        title: 'Use QR code',
        onClick: (data = () => {}) => data,
        component: <FormLoginUser />,
    },
    {
        icon: <UserIcon />,
        title: 'Use phone / email / username',
        onClick: (data = () => {}) => data,
        component: <FormLoginPhone />,
    },
    {
        icon: <FacebookIcon />,
        title: 'Continue with Facebook',
        href: '#',
        login: (fuc = () => {}) => fuc,
    },
    {
        icon: <GoogleIcon />,
        title: 'Continue with Google',
        href: '#',
        login: (fuc = () => {}) => fuc,
    },
    {
        icon: <TwitterIcon />,
        title: 'Continue with Twitter',
        href: '#',
        login: (fuc = () => {}) => fuc,
    },
    {
        icon: <LineIcon />,
        title: 'Continue with Line',
        href: '#',
        login: (fuc = () => {}) => fuc,
    },
    {
        icon: <KaKaoTalkIcon />,
        title: 'Continue with KakaoTalk',
        href: '#',
        login: (fuc = () => {}) => fuc,
    },
    {
        icon: <IosIcon />,
        title: 'Continue with Apple',
        href: '#',
        login: (fuc = () => {}) => fuc,
    },
    {
        icon: <InstagramIcon />,
        title: 'Continue with Instagram',
        href: '#',
        login: (fuc = () => {}) => fuc,
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
