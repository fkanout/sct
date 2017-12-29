
import { updateDeliveryManPosition, getAvailbleDeliveryMen } from './services/gps';


(async ()=>{
    console.log(await updateDeliveryManPosition('700', 'geogeo'));
    // console.log(await getAvailbleDeliveryMen());
})();

