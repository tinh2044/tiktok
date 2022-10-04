import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './HearMenu';
import { Login } from '~/Context/LoginContext';

const cx = classNames.bind(styles);
function Menu({ children, items = [], onChange = () => {}, ...passProp }) {
    const { isLogin, logout } = useContext(Login);
    const [history, setHistory] = useState([{ data: items }]);
    useEffect(() => {
        setHistory([{ data: items }]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLogin]);
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            if (typeof item.onChange === 'function') {
                                item.onChange(logout);
                            }
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            hideOnClick={false}
            placement="bottom-end"
            interactive
            delay={[0, 700]}
            offset={[2, 4]}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={() => {
                                    setHistory((prev) => {
                                        return prev.slice(0, prev.length - 1);
                                    });
                                }}
                            />
                        )}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
};
export default Menu;
