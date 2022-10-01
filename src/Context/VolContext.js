import { createContext, useState } from 'react';
export const Vol = createContext();

function VolContext({ children }) {
    const [volume, setVolume] = useState(1);
    const value = {
        volume,
        setVolume: (vol) => setVolume(vol),
    };
    return <Vol.Provider value={value}>{children}</Vol.Provider>;
}

export default VolContext;
