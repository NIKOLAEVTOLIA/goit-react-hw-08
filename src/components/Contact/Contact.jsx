import { useState } from 'react';
import { FaPhone } from 'react-icons/fa6';
import { IoPersonSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from '../../redux/contacts/operations';
import css from './Contact.module.css';
import { toast } from 'react-hot-toast';

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const [editedName, setEditedName] = useState(name);
  const [editedNumber, setEditedNumber] = useState(number);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .then(() => {
        toast.success('Contact deleted.');
      })
      .catch(err => {
        toast.error(err.message);
      });
  };

  const handleSave = () => {
    const updatedContact = {
      id: id,
      name: editedName,
      number: editedNumber,
    };
    dispatch(updateContact(updatedContact))
      .then(() => {
        toast.success('Contact updated.');
        setIsEditing(false);
      })
      .catch(err => {
        toast.error(err.message);
      });
  };

  return (
    <div className={css.containerContact}>
      <li className={css.contact}>
        <div className={css.iconContainer}>
          <FaPhone className={css.iconPhone} size={15} />
          <IoPersonSharp className={css.iconPerson} size={16} />
        </div>
        <div>
          {isEditing ? (
            <>
              <input
                type="text"
                value={editedName}
                onChange={e => setEditedName(e.target.value)}
              />
              <input
                type="text"
                value={editedNumber}
                onChange={e => setEditedNumber(e.target.value)}
              />
              <button className={css.button} onClick={handleSave}>
                Save
              </button>
            </>
          ) : (
            <>
              <p>{name}</p>
              <p>{number}</p>
            </>
          )}
        </div>
        <button className={css.button} onClick={() => setIsEditing(true)}>
          Edit
        </button>
        <button className={css.button} onClick={handleDelete}>
          Delete
        </button>
      </li>
    </div>
  );
};

export default Contact;
