import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/counterSlice";

function Counter2() {
  const count = useSelector((state) => state.counter.value); // Access state
  const dispatch = useDispatch(); // Dispatch actions

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

// Fix: Ensure default export
export default Counter2;
