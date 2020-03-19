const axios = require('axios');

module.exports = {
  find: function (req, res) {
    axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    {
      qs: {
        'symbol': 'BTC'
      },
      headers: {
        "X-CMC_PRO_API_KEY": "da80621b-6cc1-48d2-a469-8295490e5073"
      },
      json: true,
      gzip: true
    })
      .then(function (response){
        res.json(response.data)
        
      })
      .catch(err => res.json(err))
  }
}