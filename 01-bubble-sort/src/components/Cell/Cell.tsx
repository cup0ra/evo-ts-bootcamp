import React from 'react';
import style from './Cell.module.scss';

export function Cell({ size }: { size: number }): JSX.Element {
  return (
    <div
      className={style.cell}
      style={{
        height: size * 2,
        backgroundColor: ` rgba(246, 219, 10, 0.${
          size < 10 ? `0${size}` : size
        })`,
      }}
    />
  );
}
