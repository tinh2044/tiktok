import { createContext, useState } from 'react';
import { FormLogin } from '~/components/Form';
import ModalFrom from '~/components/Modal';
export const FormCategory = createContext();
function FromContext() {
    const [Form, setForm] = useState(<FormLogin />);
    const value = {
        Form,
        setForm: (form) => {
            setForm(form);
        },
    };
    return (
        <FormCategory.Provider value={value}>
            <ModalFrom />
        </FormCategory.Provider>
    );
}
export default FromContext;
