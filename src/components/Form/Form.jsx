import { Component } from 'react';
import styles from './Form.module.scss';
import PropType from 'prop-types';

const INSTANCE_STATE = {
  name: '',
  number: '',
};

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    isContains: PropType.func.isRequired,
    addContact: PropType.func.isRequired,
  };

  hendleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  hendleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    const { isContains, addContact } = this.props;
    if (isContains(name)) {
      alert(`${name} is allready in contacts`);
      return;
    }
    addContact({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({ ...INSTANCE_STATE });
  }

  render() {
    const { form, label, input, button } = styles;
    const { name, number } = this.state;

    return (
      <form onSubmit={this.hendleSubmit} className={form}>
        <label className={label}>
          Name
          <input
            onChange={this.hendleChange}
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
            onChange={this.hendleChange}
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
  }
}

export default Form;
