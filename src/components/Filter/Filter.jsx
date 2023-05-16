import PropTypes from 'prop-types';
import { Input } from 'components/Phonebook/Phonebook.styled';
import { Label } from './Filter.styled';

const FilterContacts = ({
  filterValue,
  filterContactsHandler,
  resetFilterValue,
}) => (
  <Label>
    Find contacts by name
    <Input
      type="text"
      name="filter"
      value={filterValue}
      onChange={e => filterContactsHandler(e.target.value)}
    />
    <button type="reset" onClick={resetFilterValue}>
      Clear filter
    </button>
  </Label>
);

export default FilterContacts;

FilterContacts.propTypes = {
  filterValue: PropTypes.string.isRequired,
  filterContactsHandler: PropTypes.func.isRequired,
  resetFilterValue: PropTypes.func.isRequired,
};
