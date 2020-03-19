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
        });
        console.log(res.data.data);
      })
      .catch(err => console.log(err));
  };

  render() {
    const nfObject = new Intl.NumberFormat('en-US');

    return (
      <div >
        <div style={{height: '100vh'}}>
          <div className="box" style={{height: '100vh'}}>
            <h1 id="title">MyCrypto</h1>
            <button onClick={this.submit}>Refresh</button>
            <table style={{marginTop: "2rem"}}>
              <tbody>
              {
                this.state.results.map(coin => {
                  if(coin.symbol === "BTC" || coin.symbol === "ETH"
                  || coin.symbol === "XRP" || coin.symbol === "XLM"
                  || coin.symbol === "NEO" || coin.symbol === "ADA"
                  || coin.symbol === "XMR" || coin.symbol === "ARDR"
                  || coin.symbol === "REP" || coin.symbol === "XVG"
                  || coin.symbol === "WAVES" || coin.symbol === "XEM"
                  || coin.symbol === "LTC" || coin.symbol === "GNT"){
                  return(
                  <tr>{coin.name} - ${nfObject.format(coin.quote.USD.price)} <td>% {coin.quote.USD.percent_change_24h}</td></tr>
                  )
                  }
                })
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Prices;
