import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset, incrementByAmount } from "./counterSlice";

const CounterView = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <div>
      <h1>CounterView</h1> <hr />
      <h2>Count : {count}</h2>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(5));
        }}
      >
        Increment by 5
      </button>
    </div>
  );
};

export default CounterView;
