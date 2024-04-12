import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import Loader from '../components/Loader/Loader';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import SearchBox from '../components/SearchBox/SearchBox';

function Contacts() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.contacts.loading);
  const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
        {loading && <Loader />}
        {error && <b>{error}</b>}
      </div>
    </>
  );
}

export default Contacts;
