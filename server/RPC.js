const jaysonBrowserClient = require('jayson/lib/client/browser');
const axios = require('axios');
const fetch = require('node-fetch');
const ENDPOINT = process.env.API_ENDPOINT;

const callServer = (request, callback) => {
	const options = {
		method: 'POST',
		body: request,
		headers: {
			'Content-Type': 'application/json'
		}
	};

	fetch(ENDPOINT, options)
		.then(res => res.json())
		.then(x => callback(null, JSON.stringify(x)))
		.catch(err => callback(err, null));
};

const client = jaysonBrowserClient(callServer, {});

module.exports = client;
