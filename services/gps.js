
import {saveHashKeyValue, getAllDocHashes} from './storage';

const delivaryMenDoc = process.env.DELIVARY_MAN_DOC || 'delivarymen';

export const updateDeliveryManPosition = async (deliveryManId, gps)=> await saveHashKeyValue(delivaryMenDoc, deliveryManId, gps);
export const getAvailbleDeliveryMen = async ()=> await getAllDocHashes(delivaryMenDoc);
