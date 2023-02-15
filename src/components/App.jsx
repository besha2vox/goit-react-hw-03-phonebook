import styles from './App.module.scss';
import Form from './Form';
import ContactList from './ContactList';

const App = () => {
  return (
    <div className={styles.container}>
      <h1>PhoneBook</h1>
      <Form />
      <ContactList />
    </div>
  );
};

export default App;
