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

export const updateDeliveryManPosition = async (deliveryManId, gps)=>{
    let isUpdated;
    try{
        isUpdated = await client.hsetAsync('delivarymen', deliveryManId, gps);
    }catch(err){
        console.log('Redis',err);
    }
    return isUpdated
};

export const getAvailbleDeliveryMen = async ()=>{
    let deliveryMen;
    try{
        deliveryMen = await client.hgetallAsync('delivarymen');
    }catch(err){
        console.log('Redis',err);
    }
    return deliveryMen
};
