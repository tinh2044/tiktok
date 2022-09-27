import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/layouts/Button';
const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <Button
            className={cx('menu-item', { separate: data.separate })}
            leftIcon={data.icon}
            onClick={onClick}
            to={data.to}
        >
            {data.title}
        </Button>
    );
}
MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
export default MenuItem;
