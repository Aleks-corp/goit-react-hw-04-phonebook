import ContactsItem from 'components/ContactsItem/ContactsItem';
import { ContactsListItem } from './ContactList.styled';
import PropTypes from 'prop-types';

const ContactsList = ({ contactsList, deleteContactItem }) => {
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
export default ContactsList;

ContactsList.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContactItem: PropTypes.func.isRequired,
};
