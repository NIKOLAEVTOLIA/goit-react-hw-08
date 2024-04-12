import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { toast } from 'react-hot-toast';
import css from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .then(() => {
        toast.success('Registered successfully');
      })
      .catch(error => {
        toast.error('Failed to register');
        console.error('Registration error:', error);
      })
      .finally(() => {
        actions.setSubmitting(false);
        actions.resetForm();
      });
  };

  return (
    <div className={css.container}>
      <h2>Register</h2>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label htmlFor="name" className={css.label}>
            Username
            <Field type="text" name="name" className={css.input} />
          </label>
          <label htmlFor="email" className={css.label}>
            Email
            <Field type="email" name="email" className={css.input} />
          </label>
          <label htmlFor="password" className={css.label}>
            Password
            <Field type="password" name="password" className={css.input} />
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
