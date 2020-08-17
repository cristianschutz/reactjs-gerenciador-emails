import React, { useState, useEffect } from 'react';
import Item from './Item';
import { api } from '../../services/api';
import { Container } from './style';

interface IMenuItem {
  id: string;
  name: string;
  subMenus?: [
    {
      id: string;
      name: string;
    }
  ];
}

const Menu: React.FC = () => {
  const [menus, setMenus] = useState<IMenuItem[]>([]);

  useEffect(() => {
    api.get<IMenuItem[]>('menus').then((response) => {
      let { data } = response;
      setMenus(data);
    });
  }, []);

  return (
    <Container>
      <ol>
        <Item
          item={{
            id: '',
            name: 'Tudo',
            subMenus: [{ id: '', name: 'Ver tudo' }],
          }}
        />
        {menus.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ol>
    </Container>
  );
};

export default Menu;
