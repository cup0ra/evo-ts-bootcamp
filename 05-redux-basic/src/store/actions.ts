import { Actions } from './interface';
import * as types from './types';

export const updateBalance: Actions<number> = (payload) => ({
  type: types.UPDATE_BALANCE,
  payload,
});
export const setBalanceWithTax: Actions<number> = (payload) => ({
  type: types.SET_BALANCE_WITH_TAX,
  payload,
});
export const getCredit: Actions<number> = (payload) => ({
  type: types.CREDIT,
  payload,
});
export const addDebit: Actions<number> = (payload) => ({
  type: types.DEBIT,
  payload,
});
