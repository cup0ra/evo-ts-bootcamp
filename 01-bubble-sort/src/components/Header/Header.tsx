import React from 'react';
import style from './Header.module.scss';

interface IProps {
  isStep: boolean;
  time: number;
  size: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Header({
  onChange,
  isStep,
  time,
  size,
}: IProps): JSX.Element {
  return (
    <>
      <form>
        <label className={style.label} htmlFor="time">
          Time: <span>{time}ms</span>
          <input
            className={style.input}
            id="time"
            type="range"
            min="100"
            max="1000"
            step="100"
            value={time}
            onChange={onChange}
            disabled={isStep}
          />
        </label>
        <label className={style.label} htmlFor="number">
          Number of cells: <span>{size}</span>
          <input
            className={style.input}
            id="number"
            value={size}
            type="range"
            min="2"
            max="40"
            step="1"
            onChange={onChange}
            disabled={isStep}
          />
        </label>
      </form>
    </>
  );
}
