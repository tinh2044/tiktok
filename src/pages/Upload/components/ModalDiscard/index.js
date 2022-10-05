import classNames from 'classnames/bind';

import styles from './ModalDiscard.module.scss';

const cx = classNames.bind(styles);

function ModalDiscard({ show, onClick }) {
    return (
        <div className={cx('wrapper', { show })}>
            <h3 className={cx('heading')}>Discard this post?</h3>
            <p className={cx('note')}>The video and all edits will be discarded.</p>
            <button className={cx('discard')} onClick={onClick}>
                Discard
            </button>
            <button className={cx('continue')} onClick={onClick}>
                Continue
            </button>
        </div>
    );
}

export default ModalDiscard;
