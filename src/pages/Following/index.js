import classNames from 'classnames/bind';
import VideoItem from '~/components/VideoItem';
import styles from './Following.module.scss';
import { SuggestVideo as dataVideo } from '~/data/SuggestVideo';

const cx = classNames.bind(styles);

function Following() {
    return (
        <div className={cx('following')}>
            {dataVideo.map((data, index) => {
                return <VideoItem key={index} data={data} />;
            })}
        </div>
    );
}

export default Following;
