const rp = require('request-promise');
const Promise = require('bluebird');
const FLICKR_PHOTOSEARCH_URL = 'http://flickr.com/services/rest';

const FARM_ID = '{FARM_ID}';
const SERVER_ID = '{SERVER_ID}';
const PHOTO_ID = '{PHOTO_ID}';
const PHOTO_SECRET = '{PHOTO_SECRET}';
const FLICKR_TEMPLATE_URL = `https://farm${FARM_ID}.staticflickr.com/${SERVER_ID}/${PHOTO_ID}_${PHOTO_SECRET}.jpg`;

const constructPhotoUrl = photo =>
  FLICKR_TEMPLATE_URL.replace(FARM_ID, photo.farm)
                     .replace(SERVER_ID, photo.server)
                     .replace(PHOTO_ID, photo.id)
                     .replace(PHOTO_SECRET, photo.secret);

const getDestinationPhotos = destinations => {
  const optionsArray = destinations.map(destination => ({
    uri: FLICKR_PHOTOSEARCH_URL,
    qs: {
      method: 'flickr.photos.search',
      api_key: process.env.FLICKR_PHOTOS_KEY,
      format: 'json',
      text: destination.location,
      sort: 'interestingness-desc',
      is_getty: true,
      media: 'photos',
      per_page: '1',
    },
    headers: {
      'User-Agent': 'Request-Promise',
    },
    json: true, // Automatically parses the JSON string in the response
  }));

  return Promise.all(optionsArray.map((options, index) =>
    rp(options)
      .then(data => {
        data = JSON.parse(data.match(/^jsonFlickrApi\((.*)\)$/)[1]);
        console.log('DATA TYPE: ', typeof data);
        console.log('DAATA RESULTS: ', data);
        const photo = data.photos.photo[0];
        const destination = destinations[index];

        destination.photoUrl = constructPhotoUrl(photo);
        return destination;
      })
      .catch(err => err)
  ));
};

module.exports = getDestinationPhotos;
