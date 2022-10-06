import PropTypes from 'prop-types';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Image from '../Image';
import { Link } from 'react-router-dom';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <Link to={`/`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.last_name} />
            <div className={cx('info')}>
                <span>{data.full_name}</span>
                <h4>{data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}</h4>
                <span className={cx('userName')}>{data.nickname}</span>
            </div>
        </Link>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
