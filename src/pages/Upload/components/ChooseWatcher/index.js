import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './ChooseWatcher.module.scss';

const cx = classNames.bind(styles);

const ListWatcher = ['Public', 'Friends', 'Private'];

function ChooseWatcher() {
    const [showMenu, setShowMenu] = useState(false);
    const [watcher, setWatcher] = useState(ListWatcher[0]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <p className={cx('title')}>Who can view this video</p>
                <div className={cx('select')} onClick={() => setShowMenu(!showMenu)}>
                    {watcher}
                    <FontAwesomeIcon icon={faCaretDown} className={cx('icon', { show: showMenu })} />
                    <div className={cx('option', { show: showMenu })} onClick={(e) => e.stopPropagation()}>
                        {ListWatcher.map((item, index) => (
                            <div
                                key={index}
                                className={cx('item', { active: item === watcher })}
                                onClick={() => {
                                    setShowMenu(!showMenu);
                                    setWatcher(item);
                                }}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChooseWatcher;
