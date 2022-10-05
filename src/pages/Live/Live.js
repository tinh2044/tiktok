import classNames from 'classnames/bind';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { UserGroupIcon } from '~/components/icons';
import Image from '~/components/Image';
import SuggestAccountLive from '~/data/SuggestAccountLive';
import styles from './Live.module.scss';
import LiveItem from './LiveItem';

const cx = classNames.bind(styles);

function Live() {
    const [suggestLive, setSuggestLive] = useState(SuggestAccountLive.slice(0, 4));
    const [recommendLive, setRecommendLive] = useState(SuggestAccountLive);

    const liveRef = useRef();

    useEffect(() => {
        if (liveRef !== null) {
            liveRef.current.play();
        }
    }, [suggestLive]);

    const handleLive = (item) => {
        const newSuggestLive = [];
        newSuggestLive.push(item);
        const len = SuggestAccountLive.length;
        while (newSuggestLive.length < 4) {
            let index = Math.floor(Math.random() * len);
            if (
                !suggestLive.includes(SuggestAccountLive[index]) &&
                !newSuggestLive.includes(SuggestAccountLive[index])
            ) {
                newSuggestLive.push(SuggestAccountLive[index]);
            }
        }
        document.documentElement.scrollTop = 0;
        setSuggestLive(newSuggestLive);
    };
    const handleRecommendLive = (item) => {
        let newRecommendLive = [];
        let len = recommendLive.length;
        let index;
        index = Math.floor(Math.random() * len);
        newRecommendLive.push(recommendLive[index]);
        while (newRecommendLive.length < len) {
            index = Math.floor(Math.random() * len);
            if (!newRecommendLive.includes(recommendLive[index])) {
                console.log(recommendLive[index]);
                newRecommendLive.push(recommendLive[index]);
            }
        }
        handleLive(item);
        setRecommendLive(newRecommendLive);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('main')}>
                <div className={cx('place-live')}>
                    <header className={cx('header')}>
                        <div className={cx('desc')}>
                            <Image size="40px" className={cx('avatar')} src={suggestLive[0].avatar} />
                            <div className={cx('info')}>
                                <h5 className={cx('nickname')}>
                                    {suggestLive[0].nickname}
                                    {'is live now'}
                                </h5>
                                <h6 className={cx('name')}>{suggestLive[0].name}</h6>
                            </div>
                        </div>
                        <div className={cx('watcher')}>
                            <UserGroupIcon />
                            <span>{suggestLive[0].watcher}</span>
                            <p>Live</p>
                        </div>
                    </header>
                    <video
                        className={cx('live')}
                        src={suggestLive[0].video}
                        ref={liveRef}
                        onEnded={(e) => {
                            e.target.currentTime = 0;
                            e.target.play();
                        }}
                    />
                    <button className={cx('btn-watch')}>WATCH</button>
                </div>
                <div className={cx('suggest')}>
                    {suggestLive.map((item, index) => (
                        <div
                            key={index}
                            className={cx('item', { active: index === 0 })}
                            onClick={() => {
                                handleLive(item);
                            }}
                        >
                            <video className={cx('video')} src={item.video} />
                            <h5 className={cx('title')}>{item.title}</h5>
                        </div>
                    ))}
                </div>
            </div>
            <div className={cx('recommend')}>
                <h2 className={cx('heading')}>Recommend LIVE Videos</h2>
                {recommendLive.map((item, index) => (
                    <LiveItem key={index} data={item} onClick={handleRecommendLive} />
                ))}
            </div>
        </div>
    );
}

export default Live;
