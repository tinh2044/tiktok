import classNames from 'classnames/bind';
import { Fragment } from 'react';
import { useForm } from '~/hooks';
import FormLoginPhone from '../FormLoginPhone';
import FormSignUp from '../FormSignUp';
import FormLoginUser from '../FromLoginUser';
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
