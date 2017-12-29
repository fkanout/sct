import { updateDeliveryManPosition, getAvailbleDeliveryMen } from './services/gps';


(async ()=>{
    console.log(await updateDeliveryManPosition('500', 'GeoGEo'));
    console.log(await getAvailbleDeliveryMen());

})();

