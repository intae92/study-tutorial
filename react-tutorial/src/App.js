import React, { createContext, useContext, useState, useReducer } from "react";
import styled from "styled-components";
import Hello from "./Hello";
import HelloButton from "./HelloButton";
import { HelloProvider } from "./HelloContext";

const App = () => {
  return (
    <>
      <HelloProvider>
        <Hello />
        <HelloButton />
      </HelloProvider>
    </>
  );
};

export default App;

//https://samtao.tistory.com/34
