import { ActionType, Pizza } from "../types";
import * as type from "./constants";

export const addPizza = (value: Pizza): ActionType<Pizza> => ({
  type: type.PIZZA_ADDED_INTO_BASKET,
  payload: value,
});
export const removePizza = (value: Pizza): ActionType<Pizza> => ({
  type: type.PIZZA_REMOVED_FROM_BASKET,
  payload: value,
});
export const showPizza = (value: Pizza[]): ActionType<Pizza[]> => ({
  type: type.PIZZA_VIEWED,
  payload: value,
});
