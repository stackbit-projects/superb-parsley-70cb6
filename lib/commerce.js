import Commerce from '@chec/commerce.js';

const checAPIKey = process.env.pk_test_284405fcce0b12e55ce16fadb931a5647ccaf256bd95c;
const devEnvironment = process.env.NODE_ENV === 'development';

const commerceConfig = {
  axiosConfig: {
    headers: {
      'X-Chec-Agent': 'commerce.js/v2',
      'Chec-Version': '2021-03-10',
    },
  },
};


export default new Commerce(
  checAPIKey,
  devEnvironment,
  commerceConfig,
);
