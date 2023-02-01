import { useState, useEffect } from 'react';
import styles from './App.module.scss';
import shortid from 'shortid';
import Form from './Form';
import ContactList from './ContactList';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const stringifyContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringifyContacts);
  }, [contacts]);

  const addContact = contact => {
    contact.id = shortid();
    setContacts([...contacts, contact]);
  };

  const isContains = contactName => {
    return contacts.some(({ name }) => name === contactName);
  };

  const removeContact = removeId => {
    return setContacts(contacts.filter(({ id }) => id !== removeId));
  };

  const filterContacts = () => {
    if (!filter) return contacts;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const hendleChange = filterWord => {
    setFilter(filterWord.toLowerCase());
  };

  const contactList = filterContacts();
  const contactsCount = contacts.length;

  return (
    <div className={styles.container}>
      <h1>PhoneBook</h1>
      <Form isContains={isContains} addContact={addContact} />
      {contactList ? (
        <ContactList
          contactsCount={contactsCount}
          searchContact={hendleChange}
          removeContact={removeContact}
          contacts={contactList}
        />
      ) : (
        <p>Contact list is empty</p>
      )}
    </div>
  );
};

export default App;
