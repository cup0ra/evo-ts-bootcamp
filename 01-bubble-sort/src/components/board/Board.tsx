/* eslint-disable no-param-reassign */
import React from 'react';
import { Cell } from '../Cell/Cell';
import style from './Board.module.scss';

export function Board({ array }: { array: number[] }): JSX.Element {
  return (
    <>
      <div className={style.board}>
        {array.map((item: number) => {
          return <Cell key={`cell${item}`} size={item} />;
        })}
      </div>
    </>
  );
}
