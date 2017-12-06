const config = require('../config/config'),
    axios = require('axios');

module.exports = app => {

    app.get('/api/pigdata', async (req, res) => {
        console.log(req.query.name)
        console.log(req.params)

        let response = await axios.get(`${config.pigUrl}?${config.api_key}`);

        try {
            res.status(200).json({data: response.data})
        }
        catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    })
};
