import React, { Component } from "react";
import ReactDOM from "react-dom";
import Doggos from "./components/Doggos";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doggos: []
    };
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breed/lab/images")
      .then(res => res.json())
      .then(dogs => this.setState({ doggos: dogs.message }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Doggos doggos={this.state.doggos} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
