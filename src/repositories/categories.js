/* eslint-disable import/no-named-as-default-member */
import config from '../config';

function getAllWithVideos() {
  // eslint-disable-next-line no-console
  console.log(config.URL_DB);

  return config.URL_DB;
}

export default {
  getAllWithVideos,
};
