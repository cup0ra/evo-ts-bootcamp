import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../store/interface';

export const Balance: FC = () => {
  const balance = useSelector((state: IState) => state.balance);
  return <div>BALANCE:{balance}</div>;
};
