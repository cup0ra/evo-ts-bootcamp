import * as types from './types';
import { IState, ActionType } from './interface';

const initState = {
  balance: 1000,
};

export function balanceReducer(
  state: IState = initState,
  action: ActionType<number>,
): IState {
  switch (action.type) {
    case types.UPDATE_BALANCE:
      return { ...state, balance: action.payload };
    case types.CREDIT:
      return { ...state, balance: state.balance - action.payload };
    case types.DEBIT:
      return { ...state, balance: state.balance + action.payload };
    case types.SET_BALANCE_WITH_TAX:
      return { ...state, balance: state.balance * (1 - action.payload) };
    default:
      return state;
  }
}
