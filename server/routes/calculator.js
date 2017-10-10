const operators = require('../services/operators');

module.exports = app => {
    app.get('/api/operators', (req, res) => {
        try{
            res.status(200).send(operators);
        }
        catch(err) {
            console.log(err);
            res.status(500).send(err);
        }
    });
};
