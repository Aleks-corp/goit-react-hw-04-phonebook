import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { ContactsListItem } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactsList = ({
  contactsArr,
  normalizedFilterValue,
  deleteContactItem,
}) => {
  const contactsList = normalizedFilterValue
    ? contactsArr.filter(contact =>
        contact.name
          .toLowerCase()
          .includes(normalizedFilterValue.toLowerCase().trim())
      )
    : contactsArr;
  return (
    <ul>
      {contactsList.map(contact => (
        <ContactsListItem key={contact.id}>
          <ContactsItem
            id={contact.id}
            name={contact.name}
            number={contact.number}
            deleteContactItem={deleteContactItem}
          />
        </ContactsListItem>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contactsArr: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filterName: PropTypes.string,
};
