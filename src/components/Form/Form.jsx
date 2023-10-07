import { useState } from 'react';
import css from './Form.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/createAction';
import { nanoid } from 'nanoid';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChangeName = event => {
    const value = event.target.value;
    setName(value);
  };

  const handleChangeNumber = event => {
    const value = event.target.value;
    setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addContact({ nameText: name, numberText: number }));
    setName('');
    setNumber('');
  };

  const loginNameId = nanoid();
  const loginNumberId = nanoid();

  return (
    <form onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          id={loginNameId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
        />
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChangeNumber}
          id={loginNumberId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter phone number"
        />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </label>
    </form>
  );
};
