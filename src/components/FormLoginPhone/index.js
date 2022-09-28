import className from 'classnames/bind';
import { Fragment, useState } from 'react';
import { useForm } from '~/hooks';
import FormLogin from '../FormLogin';
import styles from './FormLoginPhone.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import FormSignUp from '../FormSignUp';
import Button from '~/layouts/Button';
const cx = className.bind(styles);
function FormLoginPhone() {
    const { setForm } = useForm();
    const [isPhone, setIsPhone] = useState(true);
    return (
        <Fragment>
            <div className={cx('wrapper')}>
                <button className={cx('back')} onClick={() => setForm(<FormLogin />)}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <h1 className={cx('header')}>Log in</h1>
                <div className={cx('body')}>
                    <div className={cx('desc')}>
                        <p className={cx('title')}>{isPhone ? 'Phone' : 'Email or username'}</p>
                        <p className={cx('change-form')} onClick={() => setIsPhone(!isPhone)}>
                            {isPhone ? 'Log in with email or username' : 'Log in with phone'}
                        </p>
                    </div>
                    <div className={cx('phone')}>
                        {isPhone && <div className={cx('phone-option')}>VN +84</div>}
                        <input className={cx('input')} placeholder={isPhone ? 'Phone Number' : 'Email or username'} />
                    </div>
                    {isPhone ? (
                        <div className={cx('password')}>
                            <input className={cx('input')} placeholder="Enter 6-digit code" />
                            <div className={cx('send')}>Send</div>
                        </div>
                    ) : (
                        <div className={cx('email')}>
                            <input type="password" className={cx('input')} placeholder="password" />
                        </div>
                    )}
                    <p className={cx('text')}>Log in with password</p>
                    <Button disabled large className={cx('submit')}>
                        Login
                    </Button>
                </div>
            </div>
            <div className={cx('footer')}>
                <p className={cx('title')}>Already have an account</p>
                <button className={cx('change')} onClick={() => setForm(<FormSignUp />)}>
                    Sign Up
                </button>
            </div>
        </Fragment>
    );
}

export default FormLoginPhone;
