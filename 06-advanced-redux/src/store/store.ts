import {
  applyMiddleware,
  combineReducers,
  createStore,
  Middleware,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Event, State } from "../types";
import { basketReducer } from "./basketReducer";
import { pizzaReducer } from "./pizzaReducer";
import * as type from "./constants";

export const logger: Middleware<{}, State> = (store) => (next) => (action) => {
  let result: Event;
  if (action.type === type.PIZZA_VIEWED) {
    result = {
      eventName: action.type,
    };
  } else {
    result = {
      eventName: action.type,
      pizzaName: action.payload.name,
      pizzaPrice: action.payload.price,
    };
  }
  log(result);
  return next(action);
};

const log = (event: Event) => {
  fetch("http://localhost:3001/log", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  })
    .then((json) => {
      console.log(json);
    })
    .catch((ex) => {
      console.log(ex);
    });
};

const reducers = combineReducers({
  pizza: pizzaReducer,
  basket: basketReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
