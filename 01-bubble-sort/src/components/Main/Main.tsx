/* eslint-disable @typescript-eslint/no-empty-interface */

import React from 'react';
import { generateArray } from '../../service/generate';
import { sortStep } from '../../service/sort';
import { Board } from '../board/Board';
import { Button } from '../Button/Button';
import Header from '../Header/Header';
import { Status } from '../Status/Status';
import style from './Main.module.scss';

interface IProps {}

interface IState {
  arrayCell: number[];
  isStep: boolean;
  time: number;
  size: number;
  isSolved: boolean;
}

export class Main extends React.Component<IProps, IState> {
  interval!: NodeJS.Timeout;

  constructor(props: IProps) {
    super(props);
    this.state = {
      arrayCell: generateArray(20),
      isStep: false,
      time: 100,
      size: 20,
      isSolved: false,
    };
  }

  componentWillUnmount(): void {
    clearInterval(this.interval);
  }

  sort = (): void => {
    const { arrayCell, isStep } = this.state;
    this.setState(() => ({ ...sortStep(arrayCell) }));
    if (!isStep) {
      clearInterval(this.interval);
      this.setState({ isSolved: true });
    }
  };

  getNewSet = (): void => {
    const { size } = this.state;
    this.clear();
    this.setState({
      arrayCell: [...generateArray(size)],
      isStep: false,
      isSolved: false,
    });
  };

  startSort = (): void => {
    this.setState({ isStep: true });
    const { time } = this.state;
    this.interval = setInterval(this.sort, time);
  };

  onChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { isStep } = this.state;
    if (event.target.id === 'time') {
      this.setState({ time: +event.target.value });
    } else {
      this.setState({
        arrayCell: [...generateArray(+event.target.value)],
        size: +event.target.value,
      });
      if (!isStep) clearInterval(this.interval);
    }
  };

  clear = (): void => {
    clearInterval(this.interval);
    this.setState({ isStep: false });
  };

  render(): JSX.Element {
    const { arrayCell, isStep, time, size, isSolved } = this.state;
    return (
      <div className={style.wrapper}>
        <h1>BUBBLE SORT</h1>
        <Header
          onChange={this.onChangeInput}
          isStep={isStep}
          time={time}
          size={size}
        />
        <Board array={arrayCell} />
        <div>
          <Button name="NEW SET" fn={this.getNewSet} />
          <Button
            name={isStep ? 'PAUSE' : 'START'}
            fn={isStep ? this.clear : this.startSort}
          />
        </div>
        <Status status={isSolved} />
      </div>
    );
  }
}
