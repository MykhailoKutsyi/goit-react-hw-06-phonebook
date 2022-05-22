import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/actions';
import { getContacts } from 'redux/selectors';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';

import s from './ContactForm.module.css';

export default function ContactForm() {
  const [params, setParams] = useState({ id: nanoid(5), name: '', number: '' });

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setParams({ ...params, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    contacts.some(contact => contact.name === params.name)
      ? Notify.failure(`Contact ${params.name} already exists`)
      : dispatch(addContact(params));
    reset();
  }

  const reset = () => {
    setParams({ id: nanoid(5), name: '', number: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={params.name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={params.number}
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
  );
}
