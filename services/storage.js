import bluebird from 'bluebird';
import redis from 'redis';
import errorHandler from './errorHandler';

const client = redis.createClient({ host: process.env.REDIS_HOST, port: process.env.REDIS_HOST });

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
client.on('error', (err => errorHandler(err)));
client.on('ready', () => {
  console.log('Redis is ready ... ');
});

export const saveHashKeyValue = async (doc, key, value) => {
  let savedData;
  try {
    savedData = await client.hsetAsync(doc, key, value);
  } catch (err) {
    errorHandler(err);
  }
  return savedData;
};


export const getAllDocHashes = async (doc) => {
  let fetchedData;
  try {
    fetchedData = await client.hgetallAsync(doc);
  } catch (err) {
    errorHandler(err);
  }
  return fetchedData;
};
