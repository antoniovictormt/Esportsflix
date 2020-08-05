/* eslint-disable import/no-named-as-default-member */
import config from '../config';

const URL_CATEGORIES = `${config.URL_DB}/categories`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }
      throw new Error('Unable to load data');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }
      throw new Error('Unable to load data');
    });
}

function create(categoryObject) {
  return fetch(`${URL_CATEGORIES}?_embed=videos`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(categoryObject),
  })
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }
      throw new Error('Unable to register data');
    });
}

export default {
  getAllWithVideos,
  getAll,
  create,
};
