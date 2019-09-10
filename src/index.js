import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/header.component";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
