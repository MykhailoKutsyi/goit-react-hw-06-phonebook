import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';

import ContactListItem from 'components/ContactListItem';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getFilteredContacts);

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}
