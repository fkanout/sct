import bluebird from 'bluebird';
import redis from 'redis';
const client = redis.createClient();

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
client.on("error", function (err) {
    console.log("Error " + err);
});

client.on("ready", function () {
    console.log("Redis is ready ... ");
});

export const saveHashKeyValue = async (doc, key, value, db='redis')=>{
    let savedData;
    try{
        savedData = await client.hsetAsync(doc, key, value);
    }catch(err){
        console.log(err);
    }
    return savedData;
}


export const getAllDocHashes = async (doc, db='redis')=>{
    let fetchedData;
    try{
        fetchedData = await client.hgetallAsync(doc);
    }catch(err){
        console.log(err);
    }
    return fetchedData;
}