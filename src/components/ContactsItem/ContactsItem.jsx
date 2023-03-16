import { Thumb } from './ContactsItem.styled';
import PropTypes from 'prop-types';

export const ContactsItem = ({ id, name, number, deleteContactItem }) => {
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

ContactsItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
