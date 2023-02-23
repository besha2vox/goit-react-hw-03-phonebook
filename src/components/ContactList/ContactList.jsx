import styles from './ContactList.module.scss';
import SearchContact from './SearchContact';
import ContactListItem from './ContactListItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import {
  selectVisibleContacts,
  selectIsLoading,
  selectError,
  selectContactsCounter,
  selectVisibleContactsCounter,
} from 'redux/selectors';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const contactsCount = useSelector(selectContactsCounter);
  const visibleContactsCount = useSelector(selectVisibleContactsCounter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { list, title } = styles;

  return (
    <>
      <h2 className={title}>Contacts</h2>
      <SearchContact />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && (
        <>
          {!!contactsCount ? (
            <p>
              Found {visibleContactsCount}/{contactsCount}{' '}
              {visibleContactsCount === 1 ? 'contact' : 'contacts'}
            </p>
          ) : (
            <p>Contact list is empty</p>
          )}
        </>
      )}
      {!!contactsCount && (
        <ul className={list}>
          {visibleContacts.map(({ name, number, id }) => (
            <ContactListItem name={name} number={number} id={id} key={id} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
