import classNames from 'classnames/bind';
import styles from './FormLogin.scss';
const cx = classNames.bind(styles);

function FormLoginItem({ data }) {
    const Comp = data.href ? 'a' : 'div';

    return (
        <Comp className={cx('item')} href={data.href || ''}>
            {data.icon}
            <p className={cx('item-title')}>{data.title}</p>
        </Comp>
    );
}

export default FormLoginItem;
