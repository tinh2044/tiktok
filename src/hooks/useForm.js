import { useContext } from 'react';
import { FormCategory } from '~/Context/FormContext';

function useForm() {
    const { Form, setForm } = useContext(FormCategory);
    return { Form, setForm };
}
export default useForm;
