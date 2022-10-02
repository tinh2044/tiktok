import className from 'classnames/bind';
import { useContext } from 'react';

import images from '~/assets/images';
import { ModalDownload } from '~/Context/ModalDownloadContext';
import { CloseIcon } from '../../icons';
import styles from './ModalDownload.module.scss';

const cx = className.bind(styles);

function FormDownload() {
    const { showModalDownload, setShowModalDownload } = useContext(ModalDownload);
    return (
        <div className={cx('modal', { hide: !showModalDownload })} onClick={() => setShowModalDownload('hide')}>
            <div
                className={cx('wrapper')}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <header className={cx('header')}>
                    <p className={cx('heading')}>Get the TikTok app</p>
                    <button className={cx('close')} onClick={() => setShowModalDownload('hide')}>
                        <CloseIcon />
                    </button>
                </header>
                <div className={cx('body')}>
                    <div className={cx('qr-code')}>
                        <p className={cx('title')}>Scan QR code to download TikTok</p>
                        <img src={images.qrDownload} alt="" className={cx('img')} />
                    </div>
                    <div className={cx('footer')}>
                        <p className={cx('title')}>Download from app stores</p>
                        <div className={cx('option')}>
                            <a
                                href="https://apps.microsoft.com/store/detail/tiktok/9NH2GPH4JZS4?hl=vi-vn&gl=vn"
                                target="_blank"
                                rel="noreferrer"
                                className={cx('item')}
                            >
                                <img src={images.microsoft} alt="" />
                            </a>
                            <a
                                href="https://www.tiktok.com/download-link/af/id1235601864"
                                target="_blank"
                                rel="noreferrer"
                                className={cx('item')}
                            >
                                <img src={images.appStore} alt="" />
                            </a>
                            <a
                                href="https://www.amazon.com/dp/B07KR1RJL2/"
                                target="_blank"
                                rel="noreferrer"
                                className={cx('item')}
                            >
                                <img src={images.amazon} alt="" />
                            </a>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.ss.android.ugc.trill&referrer=af_tranid%3DBW44yJ3p-82yf11OzBMpHQ"
                                target="_blank"
                                rel="noreferrer"
                                className={cx('item')}
                            >
                                <img src={images.googlePlay} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormDownload;
