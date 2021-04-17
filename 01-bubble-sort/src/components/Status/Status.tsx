import React from 'react';
import style from './Status.module.scss';

interface IProps {
  status: boolean;
}

export function Status({ status }: IProps): JSX.Element {
  return (
    <p className={style.status}>
      <span className={status ? style.notSolved : style.solved}>
        NOT SOLVED
      </span>
      <span className={!status ? style.notSolved : style.solved}>SOLVED</span>
    </p>
  );
}
