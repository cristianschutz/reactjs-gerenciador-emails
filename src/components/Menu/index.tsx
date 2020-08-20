import React, { useState, useEffect } from 'react';
import Item from './Item';
import { api } from '../../services/api';
import { Container } from './style';
import { useIntl } from '../../hooks/i18n';

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
  const { formatMessage } = useIntl();

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
            name: formatMessage({ id: 'menu.all' }),
            subMenus: [{ id: '', name: formatMessage({ id: 'menu.see_all' }) }],
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
