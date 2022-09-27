import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Share.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Share({ data }) {
    const [listData, setListData] = useState(data.slice(0, 4));
    const [isMore, setIsMore] = useState(false);
    return (
        <div className={cx('wrapper')}>
            {listData.map((item, index) => {
                return (
                    <Link key={index} className={cx('item')}>
                        <div style={{ backgroundColor: item.bgc }} className={cx('icon')}>
                            {item.icon}
                        </div>
                        <p className={cx('title')}>{item.title}</p>
                    </Link>
                );
            })}
            {isMore ? (
                <button
                    className={cx('btn')}
                    onClick={() => {
                        setIsMore(false);
                        setListData(data.slice(0, 4));
                    }}
                >
                    <FontAwesomeIcon icon={faChevronUp} />
                </button>
            ) : (
                <button
                    className={cx('btn')}
                    onClick={() => {
                        setIsMore(true);
                        setListData(data);
                    }}
                >
                    <FontAwesomeIcon icon={faChevronDown} />
                </button>
            )}
        </div>
    );
}

export default Share;
