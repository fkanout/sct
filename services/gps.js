
import {saveHashKeyValue, getAllDocHashes} from './storage';

export const updateDeliveryManPosition = async (deliveryManId, gps)=> await saveHashKeyValue('delivarymen', deliveryManId, gps);
export const getAvailbleDeliveryMen = async ()=> await getAllDocHashes('delivarymen');
