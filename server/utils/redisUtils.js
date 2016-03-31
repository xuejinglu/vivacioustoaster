const Promise = require('bluebird');
const redis = require('redis');

module.exports = {
  isInRedis: key => {
    const client = redis.createClient();
    client.on('connect', () => {
      console.log('connected');
    });

    const redisGetAsync = Promise.promisify(client.get, { context: client });

    return redisGetAsync(key)
      .then(value => {
        client.quit();
        return value;
      });
  },
  createInRedis: (key, events) => {
    const client = redis.createClient();
    client.on('connect', () => {
      console.log('connected');
    });
    const newEvents = JSON.stringify(events);
    client.set(key, newEvents, () => {
      client.quit();
    });
  },
};
