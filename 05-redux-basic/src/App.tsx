import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Balance } from './components/Balance';
import {
  addDebit,
  getCredit,
  setBalanceWithTax,
  updateBalance,
} from './store/actions';
import './App.css';

function App(): JSX.Element {
  const dispatch = useDispatch();
  const clickButton = useCallback((click) => dispatch(click), [dispatch]);
  return (
    <div className="App">
      <Balance />
      <div>
        <button type="button" onClick={() => clickButton(getCredit(200))}>
          CREDIT
        </button>
        <button type="button" onClick={() => clickButton(addDebit(100))}>
          DEBIT
        </button>
        <button
          type="button"
          onClick={() => clickButton(setBalanceWithTax(0.14))}
        >
          SUBTRACT_PERCENTAGE
        </button>
        <button type="button" onClick={() => clickButton(updateBalance(1000))}>
          UPDATE_BALANCE
        </button>
      </div>
    </div>
  );
}

export default App;
