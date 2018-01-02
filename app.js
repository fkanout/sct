import { updateDeliveryManPosition, getAvailbleDeliveryMen } from './services/gps';

const app = async () => {
  console.log('started');
  console.log(process.env.ENV);
  console.log(await updateDeliveryManPosition('700', 'geogeo'));
  // console.log(await getAvailbleDeliveryMen());
};

export default app;
