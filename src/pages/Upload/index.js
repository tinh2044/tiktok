import classNames from 'classnames/bind';
import { createElement, useRef } from 'react';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { UploadSolidIcon, WarningIcon } from '~/components/icons';
import AllowUserTo from './components/AllowUserTo';
import ChooseWatcher from './components/ChooseWatcher';
import Footer from './components/Footer';
import ModalCopyright from './components/ModalCopyright';
import ModalDiscard from './components/ModalDiscard';

import styles from './Upload.module.scss';

const cx = classNames.bind(styles);
function Upload() {
    const [inputValue, setInputValue] = useState('');
    const [isSwitch, setIsSwitch] = useState(false);
    const [showCopyright, setShowCopyright] = useState(false);
    const [showDiscard, setShowDiscard] = useState(false);

    const bodyRef = useRef();
    const handleInput = (e) => {
        const value = e.target.value;
        if (value.length >= 4) {
            console.dir(bodyRef.appendChild);
            setInputValue((prev) => prev);
        } else {
            setInputValue(value);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('main')}>
                <header className={cx('header')}>
                    <h2 className={cx('heading')}>Upload video</h2>
                    <h5 className={cx('note')}>Post a video to your account</h5>
                </header>
                <div className={cx('body')} ref={bodyRef}>
                    <label htmlFor="choose" className={cx('upload')}>
                        <span className={cx('icon')}>
                            <UploadSolidIcon width="50" height="30" />
                        </span>
                        <h4 className={cx('title')}>Select video to upload</h4>
                        <p className={cx('note')}>Or drag and drop a file</p>
                        <div className={cx('desc')}>
                            <p className={cx('text')}>MP4 or WebM</p>
                            <p className={cx('text')}>720x1280 resolution or higher</p>
                            <p className={cx('text')}>Up to 10 minutes</p>
                            <p className={cx('text')}>Less than 2 GB</p>
                        </div>
                        <label htmlFor="choose" className={cx('btn-select')}>
                            Select file
                        </label>
                        <input type="file" id="choose" style={{ display: 'none' }} />
                    </label>
                    <form className={cx('form')}>
                        <div className={cx('caption')}>
                            <div className={cx('desc')}>
                                <p className={cx('title')}>Caption</p>
                                <span className={cx('count')}>{inputValue.length || 0}/4</span>
                            </div>
                            <div className={cx('input')}>
                                <input type="text" value={inputValue} onChange={handleInput} />
                            </div>
                        </div>

                        <div className={cx('cover')}>
                            <p className={cx('title')}>Cover</p>
                            <div className={cx('container')}>
                                <div className={cx('item')}></div>
                            </div>
                        </div>
                        <div className={cx('action')}>
                            <ChooseWatcher />
                            <AllowUserTo />
                        </div>
                        <div className={cx('switch-wrap')}>
                            <p className={cx('title')}>Run a copyright check</p>
                            <div
                                className={cx('switch', { switched: isSwitch })}
                                onClick={() => setIsSwitch(!isSwitch)}
                            ></div>
                        </div>
                        {!isSwitch ? (
                            <p className={cx('copyright')}>
                                We'll check your video for potential copyright infringements on used sounds. If
                                infringements are found, you can edit the video before posting.
                                <span onClick={() => setShowCopyright(true)}>Learn more</span>
                            </p>
                        ) : (
                            <div className={cx('tooltip')}>
                                <WarningIcon />
                                <span> Copyright check will not begin until your video is uploaded.</span>
                            </div>
                        )}
                        <div className={cx('btn-group')}>
                            <div className={cx('discard')} onClick={() => setShowDiscard(true)}>
                                Discard
                            </div>
                            <button className={cx('post')}>Post</button>
                        </div>
                        {(showCopyright || showDiscard) && (
                            <div className={cx('modal')}>
                                {showCopyright && (
                                    <ModalCopyright show={showCopyright} onClick={() => setShowCopyright(false)} />
                                )}
                                {showDiscard && (
                                    <ModalDiscard show={showDiscard} onClick={() => setShowDiscard(false)} />
                                )}
                            </div>
                        )}
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Upload;
