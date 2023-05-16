import { Thumb } from './ContactsItem.styled';
import PropTypes from 'prop-types';

const ContactsItem = ({ id, name, number, deleteContactItem }) => {
  return (
    <>
      <Thumb>
        {name}: {number}
      </Thumb>
      <button type="button" onClick={() => deleteContactItem(id)}>
        Delete
      </button>
    </>
  );
};

export default ContactsItem;

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContactItem: PropTypes.func.isRequired,
};
