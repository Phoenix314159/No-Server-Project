const operators = require('../services/operators');

module.exports = app => {
    app.get('/api/operators', (req, res) => {
        res.status(200).send(operators);
    });
}
