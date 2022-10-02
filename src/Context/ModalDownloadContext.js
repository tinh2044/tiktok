import { createContext, useState } from 'react';

export const ModalDownload = createContext();

function ModalDownloadContext({ children }) {
    const [showModalDownload, setShowModalDownload] = useState(false);
    const value = {
        showModalDownload,
        setShowModalDownload: (option) => {
            if (option === 'show') {
                setShowModalDownload(true);
            }
            if (option === 'hide') {
                setShowModalDownload(false);
            }
        },
    };
    return <ModalDownload.Provider value={value}>{children}</ModalDownload.Provider>;
}

export default ModalDownloadContext;
