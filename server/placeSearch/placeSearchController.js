const rp = require('request-promise');
const Promise = require('bluebird');
const _ = require('lodash');
const helpers = require('../config/helpers');
const tagClassifier = require('./tagClassifier');

const GOOGLE_PLACES_URL = 'https://maps.googleapis.com/maps/api/place/textsearch/json';

const formatPlace = (place, options) => ({
  address: place.formatted_address,
  lat: place.geometry.location.lat,
  lng: place.geometry.location.lng,
  icon: place.icon,
  name: place.name,
  photo: place.photos ? place.photos[0] : null, // Object or null
  placeId: place.place_id,
  rating: place.rating,
  tag: options.tripsAppTag,
  addedToDest: false,
});

module.exports = {
  search: (req, res, next) => {
    const destinations = req.body.destinations;
    const tags = req.body.tags;

    // Places API doesn't take more than 3 types, so we slice to get the first three
    // types associated with each tag. I left the full type list intact so we can discuss
    // and experiment with which tags we should choose for the top 3.
    const tagTypes = tags.map(tag => ({
      tag,
      types: tagClassifier[tag].slice(0, 3).join('|'),
    }));

    const optionsArray = tagTypes.map(tagType => ({
      uri: GOOGLE_PLACES_URL,
      qs: {
        key: process.env.GOOGLE_PLACES_KEY, // -> uri + '?key={{KEY}}'
        query: destinations[0].location,
        types: tagType.types,
      },
      headers: {
        'User-Agent': 'Request-Promise',
      },
      json: true, // Automatically parses the JSON string in the response
      tripsAppTag: tagType.tag, // A hack so we have tag when constructing formatted place object
    }));

    Promise.all(optionsArray.map(options =>
      rp(options)
        .then(data => {
          const places = data.results;
          return places.map(place => formatPlace(place, options));
        })
        .catch(err => console.error(err))
    ))
    .then(placesArray => {
      const allPlaces = _.flatten(placesArray);
      res.json(allPlaces);
    })
    .catch(err => res.status(500).end());

    // const options = {
    //   uri: GOOGLE_PLACES_URL,
    //   qs: {
    //     key: process.env.GOOGLE_PLACES_KEY, // -> uri + '?key={{KEY}}'
    //     query: destinations[0].location,
    //     types: 'amusement_park|zoo|aquarium',
    //   },
    //   headers: {
    //     'User-Agent': 'Request-Promise',
    //   },
    //   json: true, // Automatically parses the JSON string in the response
    // };

    // rp(options)
    //   .then(data => {
    //     res.json(data);
    //   })
    //   .catch(err => {
    //     res.status(500).end();
    //   });
  },
};
