import React from 'react';
import s from './Input.module.css';
import Button from './Button/Button';

function Input() {

  const input = React.createRef();

  function handleInput() {
    console.log(input.current.value)
  }
  
  return (
    <div className={s.input}>
      <h2 className={s.title}>My Posts</h2>
      <textarea className={s.textarea} ref={input} onChange={handleInput}></textarea>
      <Button />
    </div>
  );
}

export default Input;