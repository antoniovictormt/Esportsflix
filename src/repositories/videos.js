/* eslint-disable import/no-named-as-default-member */
import config from '../config';

const URL_VIDEOS = `${config.URL_DB}/videos`;

async function create(videoObject) {
  const serverResponse = await fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(videoObject),
  });
  if (serverResponse.ok) {
    const response = await serverResponse.json();
    return response;
  }
  throw new Error('Unable to register data');
}

export default {
  create,
};
