import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './SuggestAccount.module.scss';
import AccountItem from './AccountItem';
import { useEffect, useState } from 'react';
import { getAccount } from '~/services/getSuggestAccount';
const cx = classNames.bind(styles);

function SuggestAccount({ label }) {
    const [data, setData] = useState([]);

    const [isMore, setIsMore] = useState(false);
    const getData = async (perPage) => {
        const data = await getAccount(1, perPage);

        setData(data);
    };

    useEffect(() => {
        getData();
    }, []);
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
                        getData(12);
                        setIsMore(false);
                    }}
                >
                    See less
                </p>
            ) : (
                <p
                    className={cx('more')}
                    onClick={() => {
                        getData(5);
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
