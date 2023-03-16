import PropTypes from 'prop-types';
import { Input } from 'components/Phonebook/Phonebook.styled';
import { Label } from './Filter.styled';

export const FilterContacts = ({
  filterValue,
  filterContactsHandler,
  resetFilterValue,
}) => {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filterValue}
        onChange={filterContactsHandler}
      />
      <button type="reset" onClick={resetFilterValue}>
        Clear filter
      </button>
    </Label>
  );
};

FilterContacts.propTypes = {
  filterValue: PropTypes.string,
};
