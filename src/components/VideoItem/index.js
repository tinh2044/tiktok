import { InView } from 'react-intersection-observer';
import classNames from 'classnames/bind';
import { useState, useRef, useContext, useMemo, useEffect } from 'react';

import styles from './VideoItem.module.scss';
import { Vol } from '~/Context/VolContext';
import { Play } from '~/Context/PlayContext';
import Action from './Action';
import Header from './Header';
import Interactive from './Interactive';

const cx = classNames.bind(styles);


function VideoItem({ data }) {
    const { playVideo, setPlayVideo } = useContext(Play);
    const { volume, setVolume } = useContext(Vol);
    const videoRef = useRef(null);
    const [isPlay, setIstPlay] = useState(false);
    useMemo(() => {
        if (playVideo && videoRef.current !== null) {
            if (playVideo === data.id) {
                videoRef.current.play();
            } else {
                setIstPlay(false);
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [playVideo]);
    const handlePlayOrPause = () => {
        if (isPlay) {
            videoRef.current.pause();
        } else {
            setPlayVideo(data.id);
            videoRef.current.play();
        }
        return setIstPlay(!isPlay);
    };
    const handleChangeVol = (e) => {
        const vol = e.target.value / 100;
        setVolume(vol);
    };
    const handleVol = () => {
        if (volume > 0) {
            setVolume(0);
            setVolume(1);
        }
    };

    function handleIntersection(inView, entry) {
        if (inView) {
            videoRef.current.play();
            setIstPlay(true)
        } else {
            videoRef.current.pause();
            setIstPlay(false)

        }
    }

    return (
        <div className={cx('wrapper')}>
            <Header
                user={data.user}
                desc={data.description}
                music={data.music}
            />
            <div className={cx('main')}>
                <div className={cx('place-video')}>
                    <InView onChange={handleIntersection} style={{ height: "100%" }}>

                        <video
                            onTimeUpdate={(e) => {
                                e.target.volume = volume
                            }}
                            onClick={handlePlayOrPause}
                            ref={videoRef}
                            className={cx('video')}
                            src={data.file_url}
                            onEnded={(e) => {
                                e.target.currentTime = 0;
                                e.target.play();
                            }}
                        />
                        <Action isPlay={isPlay}
                            handleChangeVol={handleChangeVol}
                            handlePlayOrPause={handlePlayOrPause}
                            handleVol={handleVol}
                            volume={volume}
                        />
                    </InView>
                </div>
                <Interactive
                    likesCount={data.likes_count}
                    commentCount={data.comments_count}
                    shareCount={data.share_count}

                />
            </div>
        </div>
    );
}

export default VideoItem;
