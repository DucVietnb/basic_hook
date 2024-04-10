import { useState, useReducer } from "react";

const initState = 0;

const UP_ACTION = "up";
const DOWN_ACTION = "down";

const reducerAction = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("Errr");
  }
};

const TrainReducer = () => {
  const [counter, dispatch] = useReducer(reducerAction, initState);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
    </div>
  );
};
export default TrainReducer;
