import { INCREMENT, DECREMENT, MULTIPLY, DIVISION } from "../constants/action-types";

export default (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log(state);
      return state + 1
    case DECREMENT:
      return state - 1
    case MULTIPLY:
      return state << 2
    case DIVISION:
      return state >> 2
    default:
      return state
  }
}
