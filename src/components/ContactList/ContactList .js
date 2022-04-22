import ContactListItem from 'components/ContactListItem';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'components/redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  return (
    <>
      <ul className={s.list}>
        {contacts &&
          contacts.map(({ id, name, number }) => (
            <ContactListItem key={id} name={name} number={number} />
          ))}
      </ul>
    </>
  );
};

export default ContactList;
