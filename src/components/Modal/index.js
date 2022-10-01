import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import { useContext } from 'react';
import { Modal } from '~/Context/ModalContext';
import { useForm } from '~/hooks';

import styles from './Modal.module.scss';
const cx = classNames.bind(styles);
function ModalFrom() {
    const { Form } = useForm();
    const { hide } = useContext(Modal);
    return (
        <div className={cx('modal')}>
            <div className={cx('wrapper')}>
                <div className={cx('btn')}>
                    <button className={cx('close')} onClick={hide}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                {Form}
            </div>
        </div>
    );
}

export default ModalFrom;
