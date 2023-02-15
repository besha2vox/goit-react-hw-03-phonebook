import styles from './ContactList.module.scss';
import SearchContact from './SearchContact';
import ContactListItem from './ContactListItem';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {});

  const filterContacts = () => {
    if (!filter) return contacts;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const contactList = filterContacts();
  const contactsCount = contactList.length;
  const { list, title } = styles;

  return (
    <>
      <h2 className={title}>Contacts</h2>
      <SearchContact />
      <p>
        Found {contactsCount} {contactsCount === 1 ? 'contact' : 'contacts'}{' '}
      </p>
      {contactsCount && (
        <ul className={list}>
          {contactList.map(({ name, number, id }) => (
            <ContactListItem name={name} number={number} id={id} key={id} />
          ))}
        </ul>
      )}
      {!contactsCount && <p>Contact list is empty</p>}
    </>
  );
};

ContactList.propTypes = {};

export default ContactList;
