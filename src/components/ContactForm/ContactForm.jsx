import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addContact } from '../../redux/contacts/operations';
import css from './ContactForm.module.css';
import { Toaster, toast } from 'react-hot-toast';

const ContactForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be at most 50 characters')
      .required('Name is required'),
    number: Yup.string()
      .min(3, 'Number must be at least 3 characters')
      .max(50, 'Number must be at most 50 characters')
      .required('Number is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact))
      .then(() => {
        toast.success('Contact created!');
      })
      .catch(() => {
        toast.error('Error');
      });
    resetForm();
  };

  return (
    <>
      <Toaster />
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.nameContainer}>
            <label className={css.field} htmlFor="name">
              Name
            </label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>
          <div className={css.numberContainer}>
            <label className={css.field} htmlFor="number">
              Number
            </label>
            <Field type="text" id="number" name="number" />
            <ErrorMessage name="number" component="div" className={css.error} />
          </div>
          <button className={css.button} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
