import { type } from "@testing-library/user-event/dist/type";
import { useState, useReducer, useRef } from "react";
import reducerToDoList, { initJobs } from "./reducers";
import { addJob, setJob, deleteJob } from "./actions";
import logger from "./logger";
//up down
const initState = 0;
export const UP_ACTION = "up";
export const DOWN_ACTION = "down";
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

const Index = () => {
  const [counter, dispatch] = useReducer(reducerAction, initState);
  const [toDoList, dispatchList] = useReducer(
    logger(reducerToDoList),
    initJobs
  );
  const { job, jobs } = toDoList;
  const stateRef = useRef();
  const handleAdd = () => {
    dispatchList(addJob(job));
    dispatchList(setJob(""));
    stateRef.current.focus();
  };
  return (
    <>
      <div>
        <h1>{counter}</h1>
        <button onClick={() => dispatch(UP_ACTION)}>Up</button>
        <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      </div>
      <div>
        <h2> To Do List</h2>
        <input
          ref={stateRef}
          value={job}
          placeholder="text..."
          onChange={(e) => {
            dispatchList(setJob(e.target.value));
          }}
        />
        <button onClick={() => handleAdd()}>Add</button>
        <ul>
          {jobs &&
            jobs.map((item, index) => (
              <li key={index}>
                {item}
                <span
                  style={{ color: "red" }}
                  onClick={() => dispatchList(deleteJob(index))}
                >
                  {" "}
                  x
                </span>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
export default Index;
