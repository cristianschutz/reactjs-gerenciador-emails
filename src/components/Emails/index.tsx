import React from 'react';
import Item from './Item';
import { useEmails } from '../../hooks/emails';
import { Container } from './style';

const Emails: React.FC = () => {
  const { emails } = useEmails();

  return (
    <Container>
      {emails.length ? (
        <ul className="email-list">
          {emails.map((subItem) => (
            <Item item={subItem} key={subItem.id} />
          ))}
        </ul>
      ) : (
        <ul className="email-list">
          <li className="email-item">
            <small>Nenhum email encontrado!</small>
          </li>
        </ul>
      )}
    </Container>
  );
};

export default Emails;
