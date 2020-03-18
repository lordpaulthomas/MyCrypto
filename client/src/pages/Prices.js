import React, {Component} from 'react';
import API from './../utils/API';
import './style.css';
class Prices extends Component {
  state = {
    results: [],
    bitcoin: 0,
    ether: 0,
    ripple: 0,
    litecoin: 0,
    search: '',
  };

  submit = () => {
    API.getPrice()
      .then(res => {
        this.setState({
          results: res.data.data,
          bitcoin: res.data.data[0].quote.USD.price,
          ether: res.data.data[1].quote.USD.price,
          ripple: res.data.data[2].quote.USD.price,
          litecoin: res.data.data[5].quote.USD.price,
        });
        console.log(res.data.data);
      })
      .catch(err => console.log(err));
  };

  render() {
    const nfObject = new Intl.NumberFormat('en-US');

    return (
      <div className="App" style={{height: '100vh'}}>
        <div className="box">
          <div id="content">
            <h1 id="title">MyCrypto</h1>
            <button onClick={this.submit}>Refresh</button>
            <table>
              <tr>
                Bitcoin:
                {nfObject.format(Math.round(100 * this.state.bitcoin) / 100)}
              </tr>
              <tr>
                Ether:{' '}
                {nfObject.format(Math.round(100 * this.state.ether) / 100)}
              </tr>
              <tr>
                Ripple:
                {nfObject.format(Math.round(100 * this.state.ripple) / 100)}
              </tr>
              <tr>
                Litecoin:
                {nfObject.format(Math.round(100 * this.state.litecoin) / 100)}
              </tr>
              <tr>
                Total Value:
                {nfObject.format(
                  Math.round(
                    100 *
                      (this.state.bitcoin * 1.259 +
                        this.state.ether * 33.259 +
                        this.state.ripple * 3000 +
                        this.state.litecoin * 76.3138)
                  ) / 100
                )}
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Prices;
