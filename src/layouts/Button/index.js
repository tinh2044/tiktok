import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    children,
    small = false,
    large = false,
    rounded = false,
    disabled = false,
    color = false,
    className,
    leftIcon,
    rightIcon,
    onClick,

    ...passProp
}) {
    let Comp = 'button';
    let props = {
        onClick,
        ...passProp,
    };
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        color,
    });
    return (
        <div className={cx('btn')}>
            <Comp className={classes} {...props}>
                <span className={cx('icon')}>{leftIcon}</span>
                <span className={cx('title')}>{children}</span>
                <span className={cx('icon')}>{rightIcon}</span>
            </Comp>
        </div>
    );
}
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    rounded: PropTypes.bool,
    disabled: PropTypes.bool,
};
export default Button;
