import css from './ContactList.module.css';

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <div>
      {contacts.length ? (
        <ul className={css.list}>
          {contacts.map(contact => (
            <li className={css.listItem} key={contact.id}>
              {contact.name}: {contact.number}
              <button
                className={css.deleteButton}
                onClick={() => handleDelete(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
