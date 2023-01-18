import React from 'react'
import classNames from 'classnames/bind'
import styles from '../VideoItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay, faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)
function Action({ isPlay, handlePlayOrPause, volume, handleChangeVol, handleVol }) {
    return (
        <div className={cx('action')}>
            <button className={cx('play-or-pause')} onClick={handlePlayOrPause}>
                {isPlay ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
            </button>
            <div className={cx('volume')}>
                <div className={cx('volume-bar')}>
                    <input type="range" min="0" max="100" value={volume * 100} onChange={handleChangeVol} />
                </div>
                <button className={cx('vol-icon')} onClick={handleVol}>
                    {volume > 0 ? (
                        <FontAwesomeIcon icon={faVolumeHigh} />
                    ) : (
                        <FontAwesomeIcon icon={faVolumeXmark} />
                    )}
                </button>
            </div>
        </div>
    )
}

export default Action
