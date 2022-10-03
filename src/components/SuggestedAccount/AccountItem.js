import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; //

// import PropTypes from 'prop-types';
import { Wrapper as PopperWrapper } from '../Popper';
import classNames from 'classnames/bind';
import styles from './SuggestAccount.module.scss';
import AccountPreview from '../AccuontPreview';
import Image from '../Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function AccountItem({ data }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={data} />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <Tippy interactive delay={[800, 0]} render={renderPreview} placement="bottom" offset={[-18, -4]}>
            <Link className={cx('item')}>
                <Image src={data.avatar} alt="" className={cx('avatar')} />
                <div className={cx('info')}>
                    <p className={cx('nickname')}>
                        <strong>{data.nickname}</strong>
                        {data.tick && <FontAwesomeIcon className={cx('tick-icon')} icon={faCircleCheck} />}
                    </p>
                    <p className={cx('name')}>{data.name}</p>
                </div>
            </Link>
        </Tippy>
    );
}

export default AccountItem;
