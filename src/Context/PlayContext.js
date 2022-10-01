import { createContext, useState } from 'react';

export const Play = createContext();

function PlayContext({ children }) {
    const [playVideo, setPlayVideo] = useState(-1);
    const value = {
        playVideo,
        setPlayVideo: (id) => setPlayVideo(id),
    };
    return <Play.Provider value={value}>{children}</Play.Provider>;
}

export default PlayContext;
