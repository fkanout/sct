import request from 'request-promise-native';
import errorHandler from './errorHandler';

export const calculateRouteMatrix = async (points) => {
  let response;
  const options = {
    uri: `${process.env.ROUTE_MATRIX_API_URL}?key=${process.env.ROUTE_MATRIX_API_TOKEN}`,
    body: points,
    json: true,
  };
  try {
    response = await request.post(options);
  } catch (err) {
    errorHandler(err);
  }
  return response;
};


export const calculeteRoute = async (points) => {
  let response;
  const options = {
    method: 'GET',
    uri: `${process.env.CALCULATE_ROUTE}${points}/json?key=${process.env.CALCULATE_ROUTE_TOKEN}&computeTravelTimeFor=all&computeBestOrder=true`,
  };
  try {
    const res = await request(options);
    const { routes } = JSON.parse(res);
    response = {
      travelTimeInMin: Math.round(routes[0].summary.liveTrafficIncidentsTravelTimeInSeconds / 60),
      lengthInKm: Math.round(routes[0].summary.lengthInMeters / 1000),
    };
    return response;
  } catch (err) {
    errorHandler(err);
  }
  return response;
};

