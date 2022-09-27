import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounce, setdebounce] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            return setdebounce(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debounce;
}

export default useDebounce;
