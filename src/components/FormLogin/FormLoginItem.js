import classNames from 'classnames/bind';
import { useForm } from '~/hooks';
import styles from './FormLogin.scss';
const cx = classNames.bind(styles);

function FormLoginItem({ data }) {
    const { setForm } = useForm();
    const Comp = data.href ? 'a' : 'div';
    let onClick;
    if (!data.onClick) {
        onClick = () => {};
    } else {
        onClick = data.onClick;
    }
    return (
        <Comp
            className={cx('item')}
            href={data.href || ''}
            onClick={() => {
                onClick(setForm(data.component));
            }}
        >
            {data.icon}
            <p className={cx('item-title')}>{data.title}</p>
        </Comp>
    );
}

export default FormLoginItem;
