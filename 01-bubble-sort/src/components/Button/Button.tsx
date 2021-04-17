import React from 'react';
import style from './Button.module.scss';

interface IProps {
  name: string;
  fn(): void;
}

export function Button({ name, fn }: IProps): JSX.Element {
  return (
    <button className={style.button} type="button" onClick={fn}>
      {name}
    </button>
  );
}
