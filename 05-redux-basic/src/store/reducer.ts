import { CREDIT, DEBIT, SET_BALANCE_WITH_TAX, UPDATE_BALANCE } from './actions';

export interface Action {
  type: string;
  payload: number;
}

export interface IState {
  balance: number;
}

const initState = {
  balance: 1000,
};

export function balanceReducer(
  state: IState = initState,
  action: Action,
): IState {
  switch (action.type) {
    case UPDATE_BALANCE:
      return { ...state, balance: action.payload };
    case CREDIT:
      return { ...state, balance: state.balance + action.payload };
    case DEBIT:
      return { ...state, balance: state.balance - action.payload };
    case SET_BALANCE_WITH_TAX:
      return { ...state, balance: state.balance * (1 - action.payload) };
    default:
      return state;
  }
}
