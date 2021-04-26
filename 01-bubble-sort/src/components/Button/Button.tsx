import React from 'react';
import style from './Button.module.scss';

interface IProps {
  name: string;
  onClick(): void;
  isSolved: boolean;
}

export function Button({ name, isSolved, onClick }: IProps): JSX.Element {
  return (
    <button
      className={style.button}
      type="button"
      disabled={isSolved}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
