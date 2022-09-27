import { faItunesNote } from '@fortawesome/free-brands-svg-icons';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Hashtag({ children, className, data }) {
    return (
        <Fragment>
            {data ? (
                <Link className={className}>
                    {data.type ? <FontAwesomeIcon icon={faItunesNote} /> : <FontAwesomeIcon icon={faHashtag} />}
                    <p>{data.title}</p>
                </Link>
            ) : (
                <Link className={className}>
                    <strong>#{children}</strong>
                </Link>
            )}
        </Fragment>
    );
}

export default Hashtag;
