import { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { addContact } from '../redux/actions';
import { getContacts } from 'components/redux/selectors';

import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';

import s from './ContactForm.module.css';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    name === 'name' && setName(value);
    name === 'number' && setNumber(value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    contacts.some(item => item.name === name)
      ? Notify.failure(`Contact ${name} already exists`)
      : onSubmit({ id: nanoid(5), name, number });
    reset();
  }

  const reset = () => {
    setName('');
    setNumber('');
  };

  const nameId = nanoid();
  const telId = nanoid();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor={nameId}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            id={nameId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={telId}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            id={telId}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={s.submitButton}>
          Add contact
        </button>
      </form>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(addContact(contact)),
});

export default connect(null, mapDispatchToProps)(ContactForm);

ContactForm.proTypes = {
  onSubmit: PropTypes.func.isRequired,
};
