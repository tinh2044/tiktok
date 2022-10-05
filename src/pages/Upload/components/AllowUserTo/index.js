import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './AllowUserTo.module.scss';

const cx = classNames.bind(styles);

const listAllow = ['Comments', 'Duet', 'Stitch'];

function AllowUserTo() {
    const [listCheck, setListCheck] = useState(listAllow.map((item) => true));
    const handleCheck = (newIndex) => {
        let newListCheck = listCheck.map((item, index) => {
            if (index === newIndex) return !item;
            else return item;
        });
        setListCheck(newListCheck);
    };
    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>Allow users to:</p>
            <div className={cx('option')}>
                {listAllow.map((item, index) => (
                    <div className={cx('item')} key={index}>
                        <div className={cx('check', { checked: listCheck[index] })} onClick={() => handleCheck(index)}>
                            {listCheck[index] && <FontAwesomeIcon icon={faCheck} />}
                        </div>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllowUserTo;
