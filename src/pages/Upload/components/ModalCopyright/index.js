import classNames from 'classnames/bind';
import Button from '~/layouts/Button';

import styles from './ModalCopyright.module.scss';

const cx = classNames.bind(styles);

function ModalCopyright({ show, onClick }) {
    return (
        <div className={cx('wrapper', { show })}>
            <h2 className={cx('heading')}>How copyright checks work</h2>
            <div className={cx('desc')}>
                <p className={cx('text')}>
                    Run a copyright check on sounds you used before posting your video to identify potential copyright
                    infringements. If issues are found, you can edit your video before posting.
                </p>
                <p className={cx('text')}>
                    You can still post a video that has been flagged for copyright infringement. However, the video will
                    be muted to protect the rights of unauthorized sounds.
                </p>
                <p className={cx('text')}>
                    Note: Results of copyright checks aren't final. For instance, future changes of the copyright
                    holder's authorization to the sound may impact your video.
                </p>
            </div>
            <Button primary className={cx('btn')} onClick={onClick}>
                OK
            </Button>
        </div>
    );
}

export default ModalCopyright;
