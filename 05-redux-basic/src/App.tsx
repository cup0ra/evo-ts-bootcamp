import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Balance } from './components/Balance';
import {
  addDebit,
  getCredit,
  setBalanceWithTax,
  updateBalance,
} from './store/actions';
import './App.css';
import { ActionType } from './store/interface';

const App: FC = () => {
  const dispatch = useDispatch();
  const clickButton = useCallback(
    (click: ActionType<number>) => dispatch(click),
    [dispatch],
  );
  return (
    <div className="App">
      <Balance />
      <div>
        <button type="button" onClick={() => clickButton(getCredit(200))}>
          CREDIT 200
        </button>
        <button type="button" onClick={() => clickButton(addDebit(100))}>
          DEBIT 100
        </button>
        <button
          type="button"
          onClick={() => clickButton(setBalanceWithTax(0.14))}
        >
          SUBTRACT PERCENTAGE 0.14
        </button>
        <button type="button" onClick={() => clickButton(updateBalance(1000))}>
          UPDATE BALANCE 1000
        </button>
      </div>
    </div>
  );
};

export default App;
