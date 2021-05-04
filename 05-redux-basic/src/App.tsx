import React, { FC } from 'react';
import { Balance } from './components/Balance';
import {
  addDebit,
  getCredit,
  setBalanceWithTax,
  updateBalance,
} from './store/actions';
import './App.css';
import { Button } from './components/Button';

const App: FC = () => {
  return (
    <div className="App">
      <Balance />
      <div>
        <Button name="CREDIT 200" action={getCredit(200)} />
        <Button name="DEBIT 100" action={addDebit(100)} />
        <Button
          name="SUBTRACT PERCENTAGE 0.14"
          action={setBalanceWithTax(0.14)}
        />
        <Button name="UPDATE BALANCE 1000" action={updateBalance(1000)} />
      </div>
    </div>
  );
};

export default App;
