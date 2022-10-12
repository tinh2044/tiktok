import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import { useContext, useEffect, useRef, useState } from 'react';
import { Login } from '~/Context/LoginContext';
import { Fragment } from 'react';
import FollowingItem from './FollowingItem';
import { getAccount } from '~/services/getSuggestAccount';
import Home from '../Home';

const cx = classNames.bind(styles);

function Following() {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(1);
    const followingRef = useRef();
    const getFollowing = async (type = 'for-you') => {
        window.removeEventListener('scroll', handleLoadVideo);
        const data = await getAccount(count);
        console.log(data);
        setData((prev) => {
            return [...prev, ...data];
        });

        window.addEventListener('scroll', handleLoadVideo);
    };
    useEffect(() => {
        getFollowing('for-you');
        window.addEventListener('scroll', handleLoadVideo);

        return window.removeEventListener('scroll', handleLoadVideo);
    }, [count]);
    const handleLoadVideo = () => {
        let height = followingRef.current.scrollHeight;
        if (height > 0 && document.documentElement.scrollTop > height - 900) {
            setCount(count + 1);
        }
    };
    const { isLogin } = useContext(Login);
    return (
        <div ref={followingRef} className={cx('following')}>
            {isLogin ? (
                <Fragment>
                    <Home />
                </Fragment>
            ) : (
                <div className={cx('wrapper')}>
                    {data.map((data, index) => (
                        <FollowingItem key={index} data={data} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Following;
