const rp = require('request-promise');
const helpers = require('../config/helpers');
const tagClassifier = require('./tagClassifier');

const GOOGLE_PLACES_URL = 'https://maps.googleapis.com/maps/api/place/textsearch/json';

module.exports = {
  search: (req, res, next) => {
    const destinations = req.body.destinations;
    const tags = req.body.tags;

    // Places API doesn't take more than 3 types, so we slice to get the first three
    // types associated with the tag. I left the full type list intact so we can discuss
    // and experiment with which tags we should choose for the top 3.
    const types = tagClassifier[tags[0]].slice(0, 3).join('|');

    const options = {
      uri: GOOGLE_PLACES_URL,
      qs: {
        key: process.env.GOOGLE_PLACES_KEY, // -> uri + '?key={{KEY}}'
        query: destinations[0].location,
        types,
      },
      headers: {
        'User-Agent': 'Request-Promise',
      },
      json: true, // Automatically parses the JSON string in the response
    };

    rp(options)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(500).end();
      });
  },
};
