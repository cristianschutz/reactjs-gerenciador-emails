import React, { useState } from 'react';
import { Container } from './style';
import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';
import { useI18n, useIntl } from '../../hooks/i18n';

const Avatar: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const { signOut } = useAuth();
  const { changeTheme, theme } = useTheme();
  const { changeLang, locale } = useI18n();
  const { formatMessage } = useIntl();

  return (
    <Container>
      <button
        className="avatar"
        onClick={() => {
          setActive(!active);
        }}
      >
        <img
          src="https://gravatar.com/avatar/7a23cbb383050d88203460e38528b500?s=100&d=retro&r=x"
          alt="Avatar"
        />
      </button>
      <div
        className={'avatar-backdrop' + (active ? ' active' : '')}
        onClick={() => {
          setActive(!active);
        }}
      ></div>
      <div className={'avatar-box' + (active ? ' active' : '')}>
        <span className="avatar">
          <img
            src="https://gravatar.com/avatar/7a23cbb383050d88203460e38528b500?s=100&d=retro&r=x"
            alt="Avatar"
          />
        </span>
        <p>
          {formatMessage({ id: 'avatar.welcome' })},{' '}
          <strong>Cristian Schutz</strong>
        </p>
        <ul>
          <li>
            {formatMessage({ id: 'avatar.language' })}
            <select
              name="language"
              defaultValue={locale}
              onChange={(e) => {
                changeLang(e.target.value);
              }}
            >
              <option value="pt">
                {formatMessage({ id: 'avatar.portuges' })}
              </option>
              <option value="en">
                {formatMessage({ id: 'avatar.english' })}
              </option>
            </select>
          </li>
          <li>
            <button onClick={() => changeTheme()}>
              {theme.title === 'light'
                ? formatMessage({ id: 'avatar.dark_mode' })
                : formatMessage({ id: 'avatar.light_mode' })}
            </button>
            <button onClick={() => signOut()}>Logout</button>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Avatar;
