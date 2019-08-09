import React, { Component } from "react";
import ReactDOM from "react-dom";
import DoggoParentClass from "./components/DoggoParentClass.jsx";

import "./styles.css";


class App extends Component {
  

  render() {
    return (
      <div className="App">
        <DoggoParentClass />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
