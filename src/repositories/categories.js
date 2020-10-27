/* eslint-disable import/no-named-as-default-member */
import config from '../config';

const URL_CATEGORIES = `${config.URL_DB}/categories`;

async function getAll() {
  const serverResponse = await fetch(`${URL_CATEGORIES}`);
  if (serverResponse.ok) {
    const response = await serverResponse.json();
    return response;
  }
  throw new Error('Unable to load data');
}

async function getAllWithVideos() {
  const serverResponse = await fetch(`${URL_CATEGORIES}?_embed=videos`);
  if (serverResponse.ok) {
    const response = await serverResponse.json();
    return response;
  }
  throw new Error('Unable to load data');
}

async function create(categoryObject) {
  const serverResponse = await fetch(`${URL_CATEGORIES}?_embed=videos`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(categoryObject),
  });
  if (serverResponse.ok) {
    const response = await serverResponse.json();
    return response;
  }
  throw new Error('Unable to register data');
}

export default {
  getAllWithVideos,
  getAll,
  create,
};
