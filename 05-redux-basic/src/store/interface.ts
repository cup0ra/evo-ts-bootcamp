export type ActionType<T> = {
  type: string;
  payload: T;
};

export type Actions<T> = (value: T) => ActionType<T>;

export interface IState {
  balance: number;
}
