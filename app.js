import { updateDeliveryManPosition, getAvailbleDeliveryMen } from './services/gps';
import { calculateRouteMatrix, calculeteRoute } from './services/routeMatrix';

const app = async () => {
  // console.log('started');
  // console.log(process.env.ENV);
  // console.log(await updateDeliveryManPosition('100', 'geogeo'));
  // console.log(await getAvailbleDeliveryMen());
//   console.log(await calculateRouteMatrix({
//     locations: [
//       {
//         latLng: {
//           lat: 48.873901,
//           lng: 2.295368,
//         },
//       }, {
//         latLng: {
//           lat: 48.839000,
//           lng: 2.273592,
//         },
//       },
//     ],
//     options: {
//       allToAll: false,
//     },
//   }));
// };
  const res = await calculeteRoute('48.873901,2.295368:48.902122,2.314677');
  console.log(res);
};
export default app;
