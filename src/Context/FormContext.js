import { createContext, useState } from 'react';
import FormLogin from '~/components/FormLogin';
// import FormSignUp from '~/components/FormSignUp';
import Modal from '~/components/Modal';
export const FormCategory = createContext();
function FromContext({ children }) {
    const [Form, setForm] = useState(<FormLogin />);
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
