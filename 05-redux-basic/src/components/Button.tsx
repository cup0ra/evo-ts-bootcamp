import React, { useCallback } from 'react';

import { useDispatch } from 'react-redux';
import { Actions } from '../store/actions';

interface IProps {
  name: string;
  onClick: Actions;
}

export const Button = ({ name, onClick }: IProps): JSX.Element => {
  const dispatch = useDispatch();
  const click = useCallback(() => dispatch(onClick), [dispatch]);
  return (
    <button type="button" onClick={click}>
      {name}
    </button>
  );
};
