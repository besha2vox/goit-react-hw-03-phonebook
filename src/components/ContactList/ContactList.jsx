import styles from './ContactList.module.scss';
import SearchContact from './SearchContact';
import ContactListItem from './ContactListItem';
import PropTypes from 'prop-types';

const ContactList = ({
  contacts,
  removeContact,
  searchContact,
  contactsCount,
}) => {
  const { list, title } = styles;

  return (
    <>
      <h2 className={title}>Contacts</h2>
      <SearchContact searchContact={searchContact} />
      <p>
        Found {contactsCount} {contactsCount === 1 ? 'contact' : 'contacts'}{' '}
      </p>
      <ul className={list}>
        {contacts.map(({ name, number, id }) => (
          <ContactListItem
            removeContact={removeContact}
            name={name}
            number={number}
            id={id}
            key={id}
          />
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func.isRequired,
  searchContact: PropTypes.func.isRequired,
  contactsCount: PropTypes.number.isRequired,
};

export default ContactList;
