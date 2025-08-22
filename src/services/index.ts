import ky from 'ky';

const prefixUrl = `${process.env.API_URL ?? ''}/`;

export const requestApi = ky.extend({
  headers: {
    Accept: 'application/json',
  },
  prefixUrl,
});
