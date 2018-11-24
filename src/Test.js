import React, { Component } from 'react';

class App extends Component {

  state = {
    name: 'Ponmudi'
  }
  
  handleClick=()=>{
    this.setState({name: "Annamalai"})
  }

  render() {
    return (
      <div className="App">
        <h2>{this.state.name}</h2>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default App;
