import React, { useRef, useState } from 'react';
import { Container } from '../style';

interface Props {
  type: string;
  name: string;
  label: string;
  onChange?: any;
  onFocus?: any;
}

const Input: React.FC<Props> = (props) => {
  let inputEl = useRef<HTMLInputElement>(null);
  const [active, setActive] = useState(false);
  const [focus, setFocus] = useState(false);

  function handleFocus(e: any) {
    setActive(true);
    setFocus(true);
    props.onFocus && props.onFocus(e);
  }

  function handleBlur(e: any) {
    setFocus(false);
    if (inputEl.current?.value) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  function handleChange(e: any) {
    if (inputEl.current?.value) {
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
      <input
        autoComplete="no"
        name={props.name}
        type={props.type}
        ref={inputEl}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Container>
  );
};

export default Input;
