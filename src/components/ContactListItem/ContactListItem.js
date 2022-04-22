import s from './ContactListItem.module.css';
import PropTypes from 'prop-types';
import { deleteContact } from '../redux/actions';
import { connect } from 'react-redux';

const ContactListItem = ({ name, number, onDeleteContact }) => {
  return (
    <>
      <li className={s.item}>
        <div>
          <p>{name}</p>
          <p>{number}</p>
        </div>
        <button
          onClick={() => onDeleteContact(name)}
          className={s.deleteButton}
        >
          Delete
        </button>
      </li>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: contactName => dispatch(deleteContact(contactName)),
});

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ContactListItem);
