import ky from 'ky';

const prefixUrl = `${process.env.API_URL ?? ''}/`;
console.log({prefixUrl});

export const request = ky.extend({
  headers: {
    Accept: 'application/json',
  },
  prefixUrl,
});
