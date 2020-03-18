import React, { Component } from 'react';
import API from './../utils/API';

class Prices extends Component {
  state = {
    results: [],
    search: ""
  }

  submit = ( )=> {

    API.getPrice()
      .then(res => {
        this.setState({ results: res.data})
        console.log(res.data.data[0].quote.USD.price);
      })
      .catch(err => console.log(err));

  }

  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <button onClick={this.submit}>Submit</button>
      </div>
    );
  }
}

export default Prices;