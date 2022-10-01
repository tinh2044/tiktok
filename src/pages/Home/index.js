import classNames from 'classnames/bind';
import VideoItem from '~/components/VideoItem';
import styles from './Home.module.scss';
import { SuggestVideo as dataVideo } from '~/data/SuggestVideo';
const cx = classNames.bind(styles);

function HomePage() {
    return (
        <div className={cx('home')}>
            {dataVideo.map((data, index) => {
                return <VideoItem key={index} data={data} />;
            })}
        </div>
    );
}

export default HomePage;
