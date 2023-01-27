import { Component } from 'react';
import styles from './App.module.scss';
import shortid from 'shortid';
import contacts from '../data/data.json';
import Form from './Form';
import ContactList from './ContactList';

class App extends Component {
  state = {
    contacts: contacts,
    filter: '',
  };

  addContact = contact => {
    const newContact = { ...contact };
    newContact.id = shortid();
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  isContains = contactName =>
    this.state.contacts.some(({ name }) => name === contactName);

  removeContact = removeId =>
    this.setState(({ contacts }) => ({
      contacts: [...contacts].filter(({ id }) => id !== removeId),
    }));

  filterContacts = newName => {
    const { contacts, filter } = this.state;
    if (!filter) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  hendleChange = filterWord => {
    this.setState({ filter: filterWord.toLowerCase() });
  };

  render() {
    const contacts = this.filterContacts();
    const contactsCount = contacts.length;

    return (
      <div className={styles.container}>
        <h1>PhoneBook</h1>
        <Form isContains={this.isContains} addContact={this.addContact} />
        {this.state.contacts.length > 0 ? (
          <ContactList
            contactsCount={contactsCount}
            searchContact={this.hendleChange}
            removeContact={this.removeContact}
            contacts={contacts}
          />
        ) : (
          <p>Contact list is empty</p>
        )}
      </div>
    );
  }
}

export default App;
