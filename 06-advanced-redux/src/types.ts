import { Action } from "redux";

export type Pizza = {
  name: string;
  price: number;
  _id: string;
};

export interface PizzaBasket extends Pizza {
  count: number;
}
export type State = {
  pizza: { pizza: Pizza[] };
  basket: { basket: PizzaBasket[]; totalPrice: number };
};

export type StatePizza = {
  pizza: Pizza[];
};

export type StateBasket = {
  basket: PizzaBasket[];
  totalPrice: number;
};

export interface ActionType<T> extends Action {
  payload: T;
}

export type Event = {
  eventName: string;
  pizzaName?: string;
  pizzaPrice?: number;
};
