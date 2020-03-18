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
    eos: 0,
    stellar: 0,
    cardano: 0,
    tron: 0,
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
          eos: res.data.data[7].quote.USD.price,
          stellar: res.data.data[11].quote.USD.price,
          cardano: res.data.data[13].quote.USD.price,
          tron: res.data.data[14].quote.USD.price
        });
        console.log(res.data.data);
      })
      .catch(err => console.log(err));
  };

  render() {
    const nfObject = new Intl.NumberFormat('en-US');

    return (
      <div className="box">
        <div style={{height: '100vh'}}>
          <div className="box" style={{height: '100vh'}}>
            <h1 id="title">MyCrypto</h1>
            <button onClick={this.submit}>Refresh</button>
            <table>
              <tbody>
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
                  {nfObject.format(Math.round(1000 * this.state.ripple) / 1000)}
                </tr>
                <tr>
                  Litecoin:
                  {nfObject.format(Math.round(100 * this.state.litecoin) / 100)}
                </tr>
                <tr>
                  EOS:
                  {nfObject.format(Math.round(100 * this.state.eos) / 100)}
                </tr>
                <tr>
                  Stellar:
                  {nfObject.format(
                    Math.round(1000 * this.state.stellar) / 1000
                  )}
                </tr>
                <tr>
                  Cardano:
                  {nfObject.format(
                    Math.round(1000 * this.state.cardano) / 1000
                  )}
                </tr>
                <tr>
                  Tron:
                  {nfObject.format(
                    Math.round(1000 * this.state.tron) / 1000
                  )}
                </tr>
                <tr>
                  Total Value:
                  {nfObject.format(
                    Math.round(
                      100 *
                        (this.state.bitcoin * 1.259 +
                          this.state.ether * 33.259 +
                          this.state.ripple * 3000 +
                          this.state.litecoin * 76.3138 +
                          this.state.eos * 240 +
                          this.state.stellar * 69376.487 +
                          this.state.cardano * 28743.3678 + 
                          this.state.tron * 31810)
                    ) / 100
                  )}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Prices;
