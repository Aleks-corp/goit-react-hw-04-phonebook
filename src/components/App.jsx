import { useState, useEffect, useRef } from 'react';
import { Section } from './Section/Section';
import { Phonebook } from './Phonebook/Phonebook';
import { ContactsList } from './ContactsList/ContactsList';
import { FilterContacts } from './Filter/Filter';
import { nanoid } from 'nanoid';
import contactsDefault from '../contacts.json';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      setContacts(
        localStorage.getItem('phonebook-contacts')
          ? JSON.parse(localStorage.getItem('phonebook-contacts'))
          : contactsDefault
      );
      console.log('1');
      isMounted.current = true;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('phonebook-contacts', JSON.stringify(contacts));
    console.log('2');
  }, [contacts]);

  const onFormSubmit = newContact => {
    newContact.id = nanoid();
    const availableInContactsList = contacts.some(
      contact =>
        contact.name.toLowerCase().trim() ===
        newContact.name.toLowerCase().trim()
    );

    if (availableInContactsList) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    setContacts(prevState => [newContact, ...prevState]);
  };

  const filterContactsHandler = e => {
    setFilterValue(e.target.value);
  };

  const deleteContactItem = id => {
    const contactsList = contacts.filter(contact => contact.id !== id);
    setContacts(() => [...contactsList]);
  };

  const resetFilterValue = () => setFilterValue('');

  return (
    <div
      style={{
        display: 'block',
        marginLeft: '20px',
        fontSize: 24,
        color: '#010101',
      }}
    >
      <Section title="Phonebook">
        <Phonebook formSubmitHandler={onFormSubmit} />
      </Section>
      <Section title="Contacts">
        <FilterContacts
          filterValue={filterValue}
          filterContactsHandler={filterContactsHandler}
          resetFilterValue={resetFilterValue}
        />
        {contacts.length === 0 ? (
          <h2>Your PhoneBook is empty:(</h2>
        ) : (
          <ContactsList
            contactsArr={contacts}
            normalizedFilterValue={filterValue.toLowerCase().trim()}
            deleteContactItem={deleteContactItem}
          />
        )}
      </Section>
    </div>
  );
}

// export class App1 extends Component {
//   state = {
//     contacts: [],
//     filterValue: '',
//   };
//   componentDidMount() {
//     this.setState({
//       contacts: localStorage.getItem('phonebook-contacts')
//         ? JSON.parse(localStorage.getItem('phonebook-contacts'))
//         : contactsDefault,
//     });
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem(
//         'phonebook-contacts',
//         JSON.stringify(this.state.contacts)
//       );
//     }
//   }
//   onFormSubmit = newContact => {
//     newContact.id = nanoid();
//     const availableInContactsList = this.state.contacts.some(
//       contact =>
//         contact.name.toLowerCase().trim() ===
//         newContact.name.toLowerCase().trim()
//     );

//     if (availableInContactsList) {
//       alert(`${newContact.name} is already in contacts.`);
//       return;
//     }

//     this.setState(state => ({
//       contacts: [newContact, ...state.contacts],
//     }));
//   };

//   filterContactsHandler = e => {
//     this.setState({ filterValue: e.currentTarget.value });
//   };

//   deleteContactItem = id => {
//     const contactsList = this.state.contacts.filter(
//       contact => contact.id !== id
//     );
//     this.setState(() => ({
//       contacts: [...contactsList],
//     }));
//   };

//   render() {
//     return (
//       <div
//         style={{
//           display: 'block',
//           marginLeft: '20px',
//           fontSize: 24,
//           color: '#010101',
//         }}
//       >
//         <Section title="Phonebook">
//           <Phonebook formSubmitHandler={this.onFormSubmit} />
//         </Section>
//         <Section title="Contacts">
//           <FilterContacts
//             filterValue={this.state.filterValue}
//             filterContactsHandler={this.filterContactsHandler}
//           />
//           {this.state.contacts.length === 0 ? (
//             <h2>Your PhoneBook is empty:(</h2>
//           ) : (
//             <ContactsList
//               contactsArr={this.state.contacts}
//               normalizedFilterValue={this.state.filterValue
//                 .toLowerCase()
//                 .trim()}
//               deleteContactItem={this.deleteContactItem}
//             />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
