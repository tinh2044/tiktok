import classNames from 'classnames/bind';
import VideoItem from '~/components/VideoItem';
import styles from './Home.module.scss';
import { memo, useEffect, useRef, useState } from 'react';
import { VideoApi } from '~/services/videoServices';
const cx = classNames.bind(styles);

function HomePage() {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(1);
    const homeRef = useRef();
    const getVideo = async (type = 'for-you') => {
        window.removeEventListener('scroll', handleLoadVideo);
        const data = await VideoApi(count, type);
        console.log(count);

        setData((prev) => {
            return [...prev, ...data];
        });

        window.addEventListener('scroll', handleLoadVideo);
    };
    useEffect(() => {
        getVideo('for-you');
        window.addEventListener('scroll', handleLoadVideo);

        return window.removeEventListener('scroll', handleLoadVideo);
    }, [count]);
    const handleLoadVideo = () => {
        let height = homeRef.current.scrollHeight;
        if (height > 0 && document.documentElement.scrollTop > height - 900) {
            setCount(count + 1);
        }
    };

    return (
        <div className={cx('home')} ref={homeRef}>
            {data.map((data, index) => {
                return <VideoItem key={index} data={data} />;
            })}
        </div>
    );
}

export default memo(HomePage);
