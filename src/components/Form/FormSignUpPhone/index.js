import { faCheck, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import { Fragment, useRef, useState } from 'react';
import { useForm } from '~/hooks';
import FormLogin from '../FormLogin';
import styles from './FormSignUpPhone.module.scss';
import { EyeIcon, EyeOffIcon } from '~/components/icons';
import Button from '~/layouts/Button';

const cx = classNames.bind(styles);
function FormSignUpPhone() {
    const { setForm } = useForm();

    const ErrorRef = useRef();
    const [hidePassword, setHidePassword] = useState(false);
    const [isPhone, setIsPhone] = useState(true);
    const [checked, setChecked] = useState(false);
    const [error, setIsError] = useState(false);
    const handleCheckBirthday = (e) => {
        let value = e.target.value.trim();
        if (value.length > 10) {
            ErrorRef.current.textContent = 'Your form was wrong';
            setIsError(true);
        } else {
            const list = value.split('/');
            if (value === '') {
                ErrorRef.current.textContent = 'Please enter your birthday';
                setIsError(true);
                return;
            }
            if (!list) {
                ErrorRef.current.textContent = 'Your form was wrong';
                setIsError(true);
                return;
            }
            if (list.length !== 3) {
                ErrorRef.current.textContent = 'Your form was wrong';
                setIsError(true);
                return;
            }
            const day = parseInt(list[0]);
            const month = parseInt(list[1]);
            const year = parseInt(list[2]);
            // Check Has Characters In Form
            // eslint-disable-next-line use-isnan
            if (day === NaN || month === NaN || year === NaN) {
                console.log('Invalid');
                ErrorRef.current.textContent = 'Your form was wrong';
                setIsError(true);
                return;
            }
            // Check Year
            if (year > new Date().getFullYear() || year < 1900) {
                ErrorRef.current.textContent = 'Your form was wrong';
                setIsError(true);
                return;
            }
            // Check Month
            if (list[1].length > 2 || month > 12 || month < 1) {
                ErrorRef.current.textContent = 'Your form is wrong';
                setIsError(true);
                return;
            } else {
                // Check Day
                let maxDay;
                // Check Max Day In Month
                if ([4, 6, 9, 11].includes(month)) {
                    maxDay = 30;
                } else if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
                    maxDay = 31;
                } else if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
                    maxDay = 29;
                } else {
                    maxDay = 28;
                }
                if (list[0].length > 2 || day > maxDay || day < 1) {
                    ErrorRef.current.textContent = 'Your form is wrong';
                    setIsError(true);
                    return;
                }
            }
        }
        ErrorRef.current.textContent = "Your birthday won't be shown publicly.";
        setIsError(false);
    };
    return (
        <div className={cx('wrapper')}>
            <button className={cx('back')} onClick={() => setForm(<FormLogin />)}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className={cx('body')}>
                <h1 className={cx('header')}>Sign Up for Tiktok</h1>
                <div className={cx('birthday')}>
                    <p className={cx('title')}>When’s your birthday?</p>

                    <input
                        type="text"
                        className={cx('input')}
                        placeholder="23/12/2004"
                        onBlur={handleCheckBirthday}
                        onInput={() => {
                            setIsError(false);
                            ErrorRef.current.textContent = "Your birthday won't be shown publicly.";
                        }}
                    />
                    <div ref={ErrorRef} className={cx('note', { error })}>
                        Your birthday won't be shown publicly.
                    </div>
                </div>
                <div className={cx('info')}>
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
                            <div className={cx('send')}>Send Code</div>
                        </div>
                    ) : (
                        <Fragment>
                            <div className={cx('email')}>
                                <input
                                    type={hidePassword ? 'text' : 'password'}
                                    className={cx('input')}
                                    placeholder="password"
                                />
                                <button
                                    className={cx('hide-show-password')}
                                    onClick={() => setHidePassword(!hidePassword)}
                                >
                                    {hidePassword ? <EyeIcon /> : <EyeOffIcon />}
                                </button>
                            </div>
                            <div className={cx('password')}>
                                <input className={cx('input')} placeholder="Enter 6-digit code" />
                                <div className={cx('send')}>Send Code</div>
                            </div>
                            <div className={cx('commit')}>
                                <div className={cx('checkbox', { checked })} onClick={() => setChecked(!checked)}>
                                    {checked && <FontAwesomeIcon className={cx('check-icon')} icon={faCheck} />}
                                </div>
                                <p className={cx('commit-title')}>
                                    Get trending content, newsletters, promotions, recommendations, and account updates
                                    sent to your email
                                </p>
                            </div>
                        </Fragment>
                    )}
                    <Button disabled large className={cx('submit')}>
                        Next
                    </Button>
                </div>
            </div>
            <p className={cx('text-note')}>
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
        </div>
    );
}

export default FormSignUpPhone;
