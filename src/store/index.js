import { createStore } from "redux";

const gameReducer = (state = { isActive: false }, action) => {
  switch(action.type){
    case "SELECT_CARD":
      return {
        ...state,
        isActive: !state.isActive
      };
    default:
      return state;
  }
}

const store = createStore(gameReducer);

export default store;