if (process.env.ENV === 'DEV') {
  require('dotenv').config(); // eslint-disable-line global-require
}
import '../app'; // eslint-disable-line import/first
