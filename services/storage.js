import bluebird from 'bluebird';
import redis from 'redis';
import errorHandler from './errorHandler';

const client = redis.createClient();

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
client.on('error', (err => errorHandler(err)));
client.on('ready', () => {
  console.log('Redis is ready ... ');
});

export const saveHashKeyValue = async (doc, key, value, db = 'redis') => {
  let savedData;
  try {
    savedData = await client.hsetAsync(doc, key, value);
  } catch (err) {
    errorHandler(err);
  }
  return savedData;
};


export const getAllDocHashes = async (doc, db = 'redis') => {
  let fetchedData;
  try {
    fetchedData = await client.hgetallAsync(doc);
  } catch (err) {
    errorHandler(err);
  }
  return fetchedData;
};
