import { Children, createContext, useState } from 'react';

export const Modal = createContext();
function ModalContext({ children }) {
    const [showModal, setShowModal] = useState(false);
    const value = {
        showModal,
        show: () => setShowModal(true),
        hide: () => setShowModal(false),
    };
    return <Modal.Provider value={value}>{children}</Modal.Provider>;
}

export default ModalContext;
