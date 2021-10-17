import React, { useContext } from "react";
import { useHelloDispatch, useHelloState } from "./HelloContext";
const HelloButton = () => {
  const dispatch = useHelloDispatch();
  const state = useHelloState();
  return (
    <button onClick={() => dispatch({ type: "clickHello" })}>
      {state.value}
    </button>
  );
};

export default HelloButton;
