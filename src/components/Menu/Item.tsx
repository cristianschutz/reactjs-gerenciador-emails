import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

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

interface Props {
  item: IMenuItem;
}

const Item: React.FC<Props> = ({ item }) => {
  const [active, setActive] = useState(false);
  let { id } = useParams();
  let ids = item.subMenus?.map((subMenuItens) => String(subMenuItens.id));

  return (
    <li key={item.id} className={active || ids?.includes(id) ? "active" : ""}>
      <button
        onClick={() => {
          setActive(!active);
        }}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fal"
          data-icon="angle-right"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 192 512"
        >
          <path
            fill="currentColor"
            d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"
          ></path>
        </svg>
        {item.name}
      </button>

      {item.subMenus && (
        <ul>
          {item.subMenus.map((subItem) => (
            <li key={subItem.id}>
              <Link
                to={"/dashboard/" + subItem.id}
                className={id === String(subItem.id) ? "active" : ""}
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="envelope"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                  ></path>
                </svg>
                {subItem.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Item;
