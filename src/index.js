import React from "react";
import ReactDOM from "react-dom";
import MyComp from "./MyComp";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <hr />
      <MyComp />
    </div>
  );
}

const store = createStore(reducer);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
