import React, {Component} from 'react';
import API from './../utils/API';
import './style.css';
import InfoBar from './../components/InfoBar';
class Prices extends Component {
  state = {
    results: [],
    bitcoin: 1.2593,
    ether: 33.0342,
    ripple: 3000,
    litecoin: 76.3183,
    eos: 240,
    stellar: 69376.487,
    search: '',
  };

  submit = () => {
    API.getPrice()
      .then(res => {
        this.setState({
          results: res.data.data,
        });
        console.log(res.data.data);
      })
      .catch(err => console.log(err));
  };

  render() {
    const nfObject = new Intl.NumberFormat('en-US');
    return (
      <div>
        <div className="text-center">
          <div className="container">
            <h1 id="title">MyCrypto</h1>
            <button className="btn btn-warning mt-2 mb-2" onClick={this.submit}>
              Refresh
            </button>
            <table className="text-center container">
              <tbody>
                {this.state.results.map(coin => {
                  if (coin.symbol === 'BTC') {
                    return (
                      <InfoBar
                        name={coin.name}
                        amount={this.state.bitcoin}
                        change={coin.quote.USD.percent_change_24h}
                        price={coin.quote.USD.price}
                      />
                    );
                  } else if (coin.symbol === 'ETH') {
                    return (
                      <InfoBar
                        name={coin.name}
                        amount={this.state.ether}
                        change={coin.quote.USD.percent_change_24h}
                        price={coin.quote.USD.price}
                      />
                    );
                  } else if (coin.symbol === 'XRP') {
                    return (
                      <InfoBar
                        name={coin.name}
                        amount={this.state.ripple}
                        change={coin.quote.USD.percent_change_24h}
                        price={coin.quote.USD.price}
                      />
                    );
                  } else if (coin.symbol === 'LTC') {
                    return(
                      <InfoBar
                      name={coin.name}
                      amount={this.state.litecoin}
                      change={coin.quote.USD.percent_change_24h}
                      price={coin.quote.USD.price}
                    />
                    )
                  } else if (coin.symbol === 'EOS') {
                    return(
                      <InfoBar
                      name={coin.name}
                      amount={this.state.eos}
                      change={coin.quote.USD.percent_change_24h}
                      price={coin.quote.USD.price}
                    />
                    )
                  } else if (coin.symbol === 'XLM'){
                    return(
                      <InfoBar
                      name={coin.name}
                      amount={this.state.stellar}
                      change={coin.quote.USD.percent_change_24h}
                      price={coin.quote.USD.price}
                    />
                    )
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Prices;
