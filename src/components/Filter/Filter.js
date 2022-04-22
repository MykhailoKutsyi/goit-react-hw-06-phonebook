import PropTypes from 'prop-types';
import { changeFilter } from '../redux/actions';
import { connect } from 'react-redux';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <label>
        Filter
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Search..."
        />
      </label>
    </>
  );
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
