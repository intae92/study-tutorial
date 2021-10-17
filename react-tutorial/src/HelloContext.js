import React, { createContext, useContext, useState, useReducer } from "react";
import styled from "styled-components";

const defaultValue = {
  value: "Hello",
  clickHelloButton: () => {
    alert();
  },
};
const HelloStateContext = createContext();
const HelloDispatchContext = createContext();

//값과 액션을 파라메터로 받고 액션별로 처리해야할 로직
// 리듀서란 이전상태(state)를 받아서 새로운 상태를 리턴한다.
// 여기서 state는 이전 상태갓이고 action은 상태를 변경시키는 함수이므로
// 기존 state를 가지고 새로운 갓을 반환한다.
const helloReducer = (state, action) => {
  switch (action.type) {
    case "clickHello": {
      const v = state.value === "Hello" ? "Hello world" : "Hello";
      console.log(state);
      return { value: v };
    }
    default: {
      throw new Error();
    }
  }
};

// Provider를 반환하는 함수를 생성한다.
// children을 Provider로 감싼 컴포넌이고 children은 생성한 context를 사용할 수 있다.
// useReducer를 이용해서 state(상태값)과 dispatch(상태를 변경시키는 함수)를 반환받는다.
const HelloProvider = ({ children }) => {
  const [state, dispatch] = useReducer(helloReducer, { value: "Hello" });
  return (
    <HelloStateContext.Provider value={state}>
      <HelloDispatchContext.Provider value={dispatch}>
        {children}
      </HelloDispatchContext.Provider>
    </HelloStateContext.Provider>
  );
};

// state를 가진 context를 반환한다.
const useHelloState = () => {
  const context = useContext(HelloStateContext);
  return context;
};
// state 변경할 action을 가진 context를 반환한다.
const useHelloDispatch = () => {
  const context = useContext(HelloDispatchContext);
  return context;
};

export { HelloProvider, useHelloState, useHelloDispatch };
