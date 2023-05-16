import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from './Phonebook.styled';

export default function Phonebook({ formSubmitHandler }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputContactHandler = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const submitContactHandler = e => {
    e.preventDefault();
    formSubmitHandler({ name, number });
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={submitContactHandler}>
      <label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={inputContactHandler}
        />
      </label>
      <label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={inputContactHandler}
        />
      </label>
      <Button type="submit">Add contacts</Button>
    </Form>
  );
}

Phonebook.propTypes = {
  formSubmitHandler: PropTypes.func.isRequired,
};
