import PropTypes from 'prop-types';

import { forwardRef, useState } from 'react';
import images from '~/assets/images';
const Image = forwardRef(({ src, alt, fallback: customFallBack = '', size = '32px', ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');

    // eslint-disable-next-line
    return (
        <img
            width={size}
            height={size}
            ref={ref}
            {...props}
            src={fallBack || src}
            alt={alt}
            onError={() => setFallBack(customFallBack || images.image)}
        />
    );
});
Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    fallBack: PropTypes.string,
    size: PropTypes.string,
};
export default Image;
