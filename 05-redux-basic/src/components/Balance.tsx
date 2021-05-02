import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../store/reducer';

export const Balance = (): JSX.Element => {
  const balance = useSelector((state: IState) => state.balance);
  return <div>BALANCE:{balance}</div>;
};
