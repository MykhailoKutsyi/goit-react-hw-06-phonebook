import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';

import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.item}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button
        onClick={() => dispatch(deleteContact(id))}
        className={s.deleteButton}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
