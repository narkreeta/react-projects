import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../app/features/counter/CounterSlicer";

function CounterCmp() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="CounterContainer">
      <button className="button" onClick={() => dispatch(increment(2))}>
        +
      </button>
      <h2>{count}</h2>
      <button className="button" onClick={() => dispatch(decrement(3))}>
        -
      </button>
    </div>
  );
}

export default CounterCmp;
