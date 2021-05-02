import { AnyAction } from 'redux';

export const UPDATE_BALANCE = 'UPDATE_BALANCE';
export const CREDIT = 'CREDIT';
export const DEBIT = 'DEBIT';
export const SET_BALANCE_WITH_TAX = 'SET_BALANCE_WITH_TAX';

export type Actions = (value: number) => AnyAction;

export const updateBalance: Actions = (payload) => ({
  type: UPDATE_BALANCE,
  payload,
});
export const setBalanceWithTax: Actions = (payload) => ({
  type: SET_BALANCE_WITH_TAX,
  payload,
});
export const getCredit: Actions = (payload) => ({
  type: CREDIT,
  payload,
});
export const addDebit: Actions = (payload) => ({
  type: DEBIT,
  payload,
});
