import { type } from "@testing-library/user-event/dist/type";
import { useState, useReducer, useRef } from "react";
//up down
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

//to do list
const initJobs = {
  job: "",
  jobs: [],
};
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};
const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};
const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};
let newState;
const reducerToDoList = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };

      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };

      break;
    case DELETE_JOB:
      const newJob = [...state.jobs];
      newJob.splice(action.payload, 1);
      newState = {
        ...state,
        jobs: newJob,
      };
      break;
    default:
      throw new Error("Err");
  }
  return newState;
};
const TrainReducer = () => {
  const [counter, dispatch] = useReducer(reducerAction, initState);
  const [toDoList, dispatchList] = useReducer(reducerToDoList, initJobs);
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
export default TrainReducer;
