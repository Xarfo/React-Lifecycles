import React, { Component } from 'react';
import Doggo from './Doggo.jsx'

class DoggoParentClass  extends Component {
    constructor(props) {
      console.log(`Constructor runs first`);
        super(props);
        this.state = {
          doggo: [],
        };
      }
    
      componentDidMount() {
        console.log(`runs after render and before will update`)
        fetch("https://dog.ceo/api/breeds/image/random")
          .then(res => 
            res.json()
            )
          .then(dog => 
            this.setState({doggo: dog.message})
            )
          .catch(err => console.log(err));
      }
      componentWillMount() {
        console.log(`Will mount runs 2nd`);
        }

      componentWillUpdate(){ 
        console.log(`Will update`);
      }

      componentWillReceive() {
      console.log(`Will Receive props`);
      }
    
      componentWillUnmount() {
        console.log(`Component is kaput`);
        }
    
      render() {
        console.log(`render runs`)
        return (
          <div className="App">
            <Doggo doggo = {this.state.doggo} />s
          </div>
        );
      }
}
 
export default DoggoParentClass;