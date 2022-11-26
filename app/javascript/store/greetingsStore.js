import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

export const greetReducer = (state = { greeting: "Hello" }, action) => {
  switch (action.type) {
    case "GREET":
      return { greeting: action.payload };
    default:
      return state;
  }
}

export const getGreeting = () => async (dispatch) => {
    const response = await fetch('/v1/greetings');
    const greeting = await response.json();
    dispatch({ type: "GREET", payload: greeting });
}

export const store = createStore(greetReducer, applyMiddleware(thunk));