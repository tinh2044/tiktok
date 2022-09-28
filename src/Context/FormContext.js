import { createContext, useState } from 'react';
import FormLogin from '~/components/FormLogin';
import FormLoginPhone from '~/components/FormLoginPhone';
import Modal from '~/components/Modal';
export const FormCategory = createContext();
function FromContext() {
    const [Form, setForm] = useState(<FormLoginPhone />);
    const value = {
        Form,
        setForm: (form) => {
            setForm(form);
        },
    };
    return (
        <FormCategory.Provider value={value}>
            <Modal />
        </FormCategory.Provider>
    );
}
export default FromContext;
