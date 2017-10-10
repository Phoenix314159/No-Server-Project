const config = require('../config/config'),
    axios = require('axios'),
    countryData = require('../services/countryData');

module.exports = app => {

    app.get('/api/countries', (req, res) => {
        res.status(200).send(countryData);
    })

    app.get('/api/currency', async (req, res) => {

        let data = await axios.get(config.currencyUrl),
            arr = [];
        for (let a in data.data.rates) {
            arr.push({currency: a, rate: data.data.rates[a]});
        }
        try {
            res.status(200).send(arr);
        }
        catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    })
};
