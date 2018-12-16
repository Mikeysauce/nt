require('dotenv').config();
const jaysonBrowserClient = require('jayson/lib/client/browser');
const axios = require('axios');
const express = require('express');
const fetch = require('node-fetch');
const app = express();

const APIKEY = process.env.API_KEY;
const PORT = process.env.PORT || 3001;

const client = require('./RPC');


app.get('/', (req, res) => {

	client.request('getTorrents', [APIKEY, { series: 'house' }], function(err, result) {
		if (err) throw err;
		res.send(result)
	});

})

app.get('/shows/:show', (req, res) => {
	const { show } = req.params;
	client.request('getTorrents', [APIKEY, { series: show }], function(err, result) {
		if (err) throw err;
		res.send(result)
	});
})

app.get('/me', (req, res) => {
	client.request('getNews', [APIKEY], function(err, result) {
		if (err) throw err;
		res.send(result)
	});
})

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
