
import {saveHashKeyValue, getAllDocHashes} from './storage';

const deliveryMenDoc = process.env.DELIVERY_MEN_DOC || 'deliverymen';

export const updateDeliveryManPosition = async (deliveryManId, gps)=> await saveHashKeyValue(deliveryMenDoc, deliveryManId, gps);
export const getAvailbleDeliveryMen = async ()=> await getAllDocHashes(deliveryMenDoc);
