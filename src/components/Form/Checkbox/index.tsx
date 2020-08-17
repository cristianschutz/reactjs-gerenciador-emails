import React from 'react';
import { Container } from './style';

interface ICheckbox {
  name: string;
  label?: string;
  checked?: boolean;
  onChange?: React.FormEventHandler;
}

const Checkbox: React.FC<ICheckbox> = ({
  label,
  name,
  checked = false,
  onChange,
}) => {
  return (
    <Container className={checked ? 'active' : ''}>
      <input
        type="checkbox"
        name={name}
        value={label || ''}
        onChange={onChange}
        checked={checked}
      />
      <span>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="check"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
          ></path>
        </svg>
      </span>
      {label && <small>{label}</small>}
    </Container>
  );
};

export default Checkbox;
