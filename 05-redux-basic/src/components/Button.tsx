import React, { FC, useCallback } from 'react';

import { useDispatch } from 'react-redux';
import { ActionType } from '../store/interface';

interface IProps {
  name: string;
  action: ActionType<number>;
}

export const Button: FC<IProps> = ({ name, action }) => {
  const dispatch = useDispatch();
  const clickButton = useCallback(() => dispatch(action), [dispatch]);
  return (
    <button type="button" onClick={clickButton}>
      {name}
    </button>
  );
};
