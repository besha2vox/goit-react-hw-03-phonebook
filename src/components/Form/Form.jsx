import { useState } from 'react';
import styles from './Form.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const hendleChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        setName(target.value);
        break;

      case 'number':
        setNumber(target.value);
        break;

      default:
        break;
    }
  };

  const isContains = contactName => {
    return contacts.some(({ name }) => name === contactName);
  };

  const hendleSubmit = e => {
    e.preventDefault();
    if (isContains(name)) {
      alert(`${name} is allready in contacts`);
      return;
    }
    dispatch(addContacts({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const { form, label, input, button } = styles;

  return (
    <form onSubmit={hendleSubmit} className={form}>
      <label className={label}>
        Name
        <input
          onChange={hendleChange}
          className={input}
          placeholder="Enter name"
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={label}>
        Number
        <input
          onChange={hendleChange}
          className={input}
          placeholder="Enter number"
          type="tel"
          value={number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default Form;
