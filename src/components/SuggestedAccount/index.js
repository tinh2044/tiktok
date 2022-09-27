import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { SuggestAccount as dataSuggestAccount } from '~/data/SuggestAccount';
import styles from './SuggestAccount.module.scss';
import AccountItem from './AccountItem';
import { useState } from 'react';
const cx = classNames.bind(styles);

function SuggestAccount({ label }) {
    const [data, setData] = useState(dataSuggestAccount.slice(0, 3));
    const [isMore, setIsMore] = useState(false);
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {data.map((item, index) => (
                <AccountItem key={index} data={item} />
            ))}
            {isMore ? (
                <p
                    className={cx('more')}
                    onClick={() => {
                        setData(dataSuggestAccount.slice(0, 3));
                        setIsMore(false);
                    }}
                >
                    See less
                </p>
            ) : (
                <p
                    className={cx('more')}
                    onClick={() => {
                        setData(dataSuggestAccount);
                        setIsMore(true);
                    }}
                >
                    See more
                </p>
            )}
        </div>
    );
}

SuggestAccount.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestAccount;
