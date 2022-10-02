import classNames from 'classnames/bind';
import VideoItem from '~/components/VideoItem';
import styles from './Following.module.scss';
import { SuggestVideo as dataVideo } from '~/data/SuggestVideo';
import { SuggestAccount } from '~/data/SuggestAccount';
import { useContext } from 'react';
import { Login } from '~/Context/LoginContext';
import { Fragment } from 'react';
import FollowingItem from './FollowingItem';

const cx = classNames.bind(styles);

function Following() {
    const { isLogin } = useContext(Login);
    return (
        <div className={cx('following')}>
            {isLogin ? (
                <Fragment>
                    {dataVideo.map((data, index) => {
                        return <VideoItem key={index} data={data} />;
                    })}
                </Fragment>
            ) : (
                <div className={cx('wrapper')}>
                    {SuggestAccount.map((data, index) => (
                        <FollowingItem key={index} data={data} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Following;
