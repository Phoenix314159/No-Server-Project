const express = require('express'),
    app = module.exports = express(),
  {port} = require('./config/config'),
    path = require('path');

process.env.PWD = process.cwd();

require('./middleware/middleware')(app);
require('./routes/pig')(app);
require('./routes/exchangeRates')(app);
require('./routes/calculator')(app);

app.use(express.static(path.join(process.env.PWD, '/dist')));

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});
