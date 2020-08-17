import React, { useState, useRef } from 'react';
import { Container } from '../style';

interface Props {
  name: string;
  label: string;
  options?: { label: string; value: number }[];
  onChange?: React.FormEventHandler;
  onFocus?: React.FormEventHandler;
}

const Select: React.FC<Props> = (props) => {
  let inputEl = useRef<HTMLSelectElement>(null);
  const [active, setActive] = useState(false);
  const [focus, setFocus] = useState(false);

  function handleFocus(e: any) {
    setActive(true);
    setFocus(true);
    props.onFocus && props.onFocus(e);
  }

  function handleBlur(e: any) {
    setFocus(false);
    if (e.target.value) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  function handleChange(e: any) {
    if (e.target.value) {
      setActive(true);
    } else {
      setActive(false);
    }

    props.onChange && props.onChange(e);
  }

  let activeClass = active === true ? 'active' : '';
  let focusClass = focus === true ? 'focus' : '';

  return (
    <Container className={activeClass + ' ' + focusClass}>
      <small>{props.label}</small>
      <select
        name={props.name}
        ref={inputEl}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <option></option>
        {props.options?.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Select;
