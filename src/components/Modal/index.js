import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import { useForm } from '~/hooks';

import styles from './Modal.module.scss';
const cx = classNames.bind(styles);
function Modal() {
    const { Form } = useForm();
    return (
        <div className={cx('modal')}>
            <div className={cx('wrapper')}>
                <div className={cx('btn')}>
                    <button className={cx('close')}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                {Form}
            </div>
        </div>
    );
}

export default Modal;
