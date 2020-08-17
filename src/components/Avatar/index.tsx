import React, { useState } from 'react';
import { Container } from './style';

const Avatar: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <Container>
      <button
        className="btn-toggle"
        onClick={() => {
          setActive(!active);
        }}
      >
        <img
          src="https://gravatar.com/avatar/7a23cbb383050d88203460e38528b500?s=100&d=retro&r=x"
          alt="Avatar"
        />
      </button>
      <ul className={active ? 'active' : ''}>
        <li>
          Tradução:{' '}
          <select name="" id="">
            <option value="pt">Portugues</option>
            <option value="en">Inglês</option>
          </select>
        </li>
        <li>
          <button>Modo Escuro</button>
        </li>
        <li>
          <button>Logout</button>
        </li>
      </ul>
    </Container>
  );
};

export default Avatar;
