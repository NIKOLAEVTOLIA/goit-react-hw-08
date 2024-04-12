import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contacts}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
