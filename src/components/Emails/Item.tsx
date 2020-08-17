import React from 'react';
import { Checkbox } from '../index';
import { useEmails } from '../../hooks/EmailsContext';

interface IsubMenuItems {
  id: string;
  name: string;
  subject: string;
  owner: string;
  users: string[];
  checked?: boolean;
  archieved?: boolean;
  scheduled?: boolean;
  trashed?: boolean;
}

interface Props {
  item: IsubMenuItems;
}

interface Ibg {
  [id: string]: string;
}

const Item: React.FC<Props> = ({ item }) => {
  const { handleCheck, handleTrash, handleArchive } = useEmails();
  const bg: Ibg = {
    B: 'cyan',
    C: 'darkblue',
    F: 'purple',
    J: 'brown',
    M: 'green',
  };

  return (
    <li
      key={item.id}
      className={'email-item ' + (item.checked ? ' active' : '')}
    >
      <div className="email-col-owner">
        <span
          className="email-user"
          style={{
            backgroundColor: bg[item.owner[0]],
          }}
        >
          {item.owner}
        </span>

        {!item.trashed && (
          <Checkbox
            name="email[]"
            checked={item.checked}
            onChange={() => {
              handleCheck(item.id);
            }}
          />
        )}
      </div>

      <div className="email-col-data">
        <small className="email-name">
          {item.name} -{' '}
          <time className="email-datetime">22/09/2020 - 14:30</time>
        </small>

        <h6 className="email-subject">{item.subject}</h6>

        {!item.trashed && (
          <div className="email-actions">
            <button
              onClick={() => {
                handleArchive(item.id);
              }}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="envelope-open-text"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M352 248v-16c0-4.42-3.58-8-8-8H168c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h176c4.42 0 8-3.58 8-8zm-184-56h176c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8H168c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8zm326.59-27.48c-1.98-1.63-22.19-17.91-46.59-37.53V96c0-17.67-14.33-32-32-32h-46.47c-4.13-3.31-7.71-6.16-10.2-8.14C337.23 38.19 299.44 0 256 0c-43.21 0-80.64 37.72-103.34 55.86-2.53 2.01-6.1 4.87-10.2 8.14H96c-17.67 0-32 14.33-32 32v30.98c-24.52 19.71-44.75 36.01-46.48 37.43A48.002 48.002 0 0 0 0 201.48V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V201.51c0-14.31-6.38-27.88-17.41-36.99zM256 32c21.77 0 44.64 16.72 63.14 32H192.9c18.53-15.27 41.42-32 63.1-32zM96 96h320v173.35c-32.33 26-65.3 52.44-86.59 69.34-16.85 13.43-50.19 45.68-73.41 45.31-23.21.38-56.56-31.88-73.41-45.32-21.29-16.9-54.24-43.33-86.59-69.34V96zM32 201.48c0-4.8 2.13-9.31 5.84-12.36 1.24-1.02 11.62-9.38 26.16-21.08v75.55c-11.53-9.28-22.51-18.13-32-25.78v-16.33zM480 464c0 8.82-7.18 16-16 16H48c-8.82 0-16-7.18-16-16V258.91c42.75 34.44 99.31 79.92 130.68 104.82 20.49 16.36 56.74 52.53 93.32 52.26 36.45.26 72.27-35.46 93.31-52.26C380.72 338.8 437.24 293.34 480 258.9V464zm0-246.19c-9.62 7.75-20.27 16.34-32 25.79v-75.54c14.44 11.62 24.8 19.97 26.2 21.12 3.69 3.05 5.8 7.54 5.8 12.33v16.3z"
                ></path>
              </svg>
            </button>
            <button
              onClick={() => {
                handleTrash(item.id);
              }}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="trash-alt"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M296 432h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zm-160 0h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zM440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v368a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V96h24a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zM384 464a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V96h320zm-168-32h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8z"
                ></path>
              </svg>
            </button>
          </div>
        )}

        <ul className="email-users">
          {item.users?.map((user) => (
            <li
              className="email-user"
              key={user}
              style={{
                backgroundColor: bg[user[0]],
              }}
            >
              {user}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default Item;