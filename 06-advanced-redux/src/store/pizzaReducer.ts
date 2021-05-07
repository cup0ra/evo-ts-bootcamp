import { ActionType, Pizza, StatePizza } from "../types";
import * as type from "./constants";

const stateInit = {
  pizza: [],
};

export const pizzaReducer = (
  state: StatePizza = stateInit,
  action: ActionType<Pizza[]>
) => {
  switch (action.type) {
    case type.PIZZA_VIEWED:
      return (state = { pizza: action.payload });
    default:
      return state;
  }
};
