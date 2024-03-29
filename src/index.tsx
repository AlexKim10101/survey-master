import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import "./styles/index.css";
import SurveyComponent from "./SurveyComponent";

// ReactDOM.render(<SurveyComponent />, document.getElementById("root"));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <SurveyComponent />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
