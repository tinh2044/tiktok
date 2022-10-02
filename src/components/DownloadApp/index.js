import className from 'classnames/bind';
import Button from '~/layouts/Button';
import { ComputerIcon, OnTopIcon, PhoneIcon } from '~/components/icons';
import styles from './DownloadApp.module.scss';
import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ModalDownload } from '~/Context/ModalDownloadContext';

const cx = className.bind(styles);

function DownloadApp() {
    const [showOnTop, setShowOnTop] = useState(0);
    const [showMenu, setShowMenu] = useState(false);
    document.onscroll = () => setShowOnTop(document.documentElement.scrollTop);

    const { setShowModalDownload } = useContext(ModalDownload);
    return (
        <div className={cx('wrapper')} style={{ bottom: showOnTop < 10 ? '-36px' : '12px' }}>
            <div className={cx('btn')} style={{ transform: showMenu ? 'scale(0)' : 'scale(1)' }}>
                <Button outline rounded small className={cx('get-app')} onClick={() => setShowMenu(true)}>
                    GET APP
                </Button>
            </div>
            <button
                className={cx('on-top')}
                onClick={() => {
                    document.documentElement.scrollTop = 0;
                }}
            >
                <OnTopIcon />
            </button>
            <div className={cx('menu')} style={{ transform: showMenu ? 'scale(1)' : 'scale(0)' }}>
                <button className={cx('close')} onClick={(e) => setShowMenu(false)}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <div className={cx('item')}>
                    <ComputerIcon />
                    <span className={cx('text')}>Get TikTok for desktop</span>
                </div>
                <div className={cx('line')}></div>
                <div className={cx('item')} onClick={() => setShowModalDownload('show')}>
                    <PhoneIcon />
                    <span className={cx('text')}>Get TikTok App</span>
                </div>
            </div>
        </div>
    );
}

export default DownloadApp;
