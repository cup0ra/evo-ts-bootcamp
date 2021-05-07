import { ActionType, Pizza, PizzaBasket, StateBasket } from "../types";
import * as type from "./constants";

const stateInit = {
  basket: [],
  totalPrice: 0,
};

export const basketReducer = (
  state: StateBasket = stateInit,
  action: ActionType<Pizza>
) => {
  switch (action.type) {
    case type.PIZZA_ADDED_INTO_BASKET:
      const find = state.basket.find(
        (pizza) => pizza._id === action.payload._id
      );
      return {
        totalPrice: Number(
          (state.totalPrice + action.payload.price).toFixed(2)
        ),
        basket:
          state.basket.length === 0 || !find
            ? [...state.basket, { ...action.payload, count: 1 }]
            : state.basket.map((pizza) =>
                pizza._id === action.payload._id
                  ? { ...pizza, count: pizza.count + 1 }
                  : pizza
              ),
      };
    case type.PIZZA_REMOVED_FROM_BASKET:
      return {
        totalPrice: Number(
          (state.totalPrice - action.payload.price).toFixed(2)
        ),
        basket: state.basket.reduce(
          (newArr: PizzaBasket[], pizza) =>
            pizza._id === action.payload._id && pizza.count > 1
              ? [...newArr, { ...pizza, count: pizza.count - 1 }]
              : pizza._id === action.payload._id && pizza.count === 1
              ? [...newArr]
              : [...newArr, pizza],
          []
        ),
      };
    default:
      return state;
  }
};
