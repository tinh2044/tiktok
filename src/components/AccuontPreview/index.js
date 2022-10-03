// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/layouts/Button';
import Image from '~/components/Image';
import { useContext } from 'react';
import { Modal } from '~/Context/ModalContext';
import { Login } from '~/Context/LoginContext';
const cx = classNames.bind(styles);
function AccountPreview({ data }) {
    const { show } = useContext(Modal);
    const { isLogin } = useContext(Login);
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Image src={data.avatar} alt="" className={cx('avatar')} />
                <Button primary onClick={isLogin ? () => {} : show}>
                    Follow
                </Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>{data.nickname}</strong>
                    {data.tick && <FontAwesomeIcon className={cx('tick-icon')} icon={faCircleCheck} />}
                </p>
                <p className={cx('name')}>{data.name}</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>{data.follow}</strong>
                    <label>{' Follows'} </label>
                    <strong className={cx('value')}>{data.totalLike}</strong>
                    <label>{' Likes'}</label>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
