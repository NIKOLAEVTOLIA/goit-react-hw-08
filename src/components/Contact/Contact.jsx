import { FaPhone } from 'react-icons/fa6';
import { IoPersonSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.contact}>
      <div className={css.iconContainer}>
        <FaPhone className={css.iconPhone} size={15} />
        <IoPersonSharp className={css.iconPerson} size={16} />
      </div>
      <div>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
