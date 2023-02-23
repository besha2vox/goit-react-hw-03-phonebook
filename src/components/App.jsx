import styles from './App.module.scss';
import Form from './Form';
import ContactList from './ContactList';

// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchContacts } from 'redux/operations';
// import { getError, getIsLoading } from 'redux/selectors';

const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>PhoneBook</h1>
      <Form />
      <ContactList />
    </div>
  );
};

export default App;
