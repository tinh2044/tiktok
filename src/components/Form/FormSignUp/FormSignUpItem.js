import classNames from 'classnames/bind';
import { useContext } from 'react';
import { Login } from '~/Context/LoginContext';
import { useForm } from '~/hooks';
import styles from './FormSignUp.module.scss';
const cx = classNames.bind(styles);

function FormSignUpItem({ data }) {
    const { setForm } = useForm();
    const { login } = useContext(Login);
    const Comp = data.href ? 'a' : 'div';
    return (
        <Comp
            className={cx('item')}
            href={data.href || ''}
            onClick={() => (Comp === 'div' ? data.onClick(setForm(data.component)) : data.login(login()))}
        >
            {data.icon}
            <p className={cx('item-title')}>{data.title}</p>
        </Comp>
    );
}

export default FormSignUpItem;
