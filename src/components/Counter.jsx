import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
   const counter = useSelector((state) => state.counterState.counter);
   return <div>Counter: {counter}</div>;
};

export default Counter;
