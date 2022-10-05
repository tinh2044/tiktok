import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import className from 'classnames/bind';
import { Fragment } from 'react';

import { useForm } from '~/hooks';
import { FormSignUp, FormLogin } from '~/components/Form';
import styles from './FormLoginQr.module.scss';
import images from '~/assets/images';
import { AddIcon, ScanIcon } from '~/components/icons';
const cx = className.bind(styles);
function FormLoginUser() {
    const { setForm } = useForm();
    return (
        <Fragment>
            <div className={cx('wrapper')}>
                <button className={cx('back')} onClick={() => setForm(<FormLogin />)}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <h1 className={cx('header')}>Log in with QR code</h1>
                <div className={cx('body')}>
                    <div className={cx('qr-code')}>
                        <img className={cx('qr-img')} src={images.qrcode} alt="" />
                        <p className={cx('qr-text')}>1. Open the TikTok app on your mobile device</p>
                        <p className={cx('qr-text')}>
                            2. On Profile, tap
                            <span>
                                <AddIcon />
                            </span>
                        </p>
                        <p className={cx('qr-text')}>
                            {' '}
                            Tap
                            <span>
                                {' '}
                                <ScanIcon />
                            </span>
                            and scan the QR code to confirm your login
                        </p>
                    </div>
                    <img className={cx('guide')} src={images.guide} alt="" />
                </div>
            </div>
            <div className={cx('footer')}>
                <p className={cx('title')}>Already have an account</p>
                <button className={cx('change')} onClick={() => setForm(<FormSignUp />)}>
                    Log in
                </button>
            </div>
        </Fragment>
    );
}

export default FormLoginUser;
