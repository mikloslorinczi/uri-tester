'use strict';

const express = require('express');
const app = express()
const morgan = require('morgan');
const url = require('url');
const PORT = (process.argv[2] || process.env.PORT || 8080);

function fullUrl(req) {
  return url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname: req.originalUrl
  });
}

app.use(express.json());

app.use(morgan('combined'));

app.get('*', (req, res) => {
	res.status(200).json(fullUrl(req));
});

app.listen(PORT, () => {
	console.log(`URI Test Server listening on PORT ${PORT}`);
});
