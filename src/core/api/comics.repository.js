import httpRequest from '../client';
import { params } from '../client/paramConfig';

const getComicsInfo = async (params = {}) => {
  const response = await httpRequest.get('comics', {
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    params: params
  });
  return response.data;
};

const filterComics = async (param = "") => {
  const response = await httpRequest.get('comics', {
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    params: param,
  });
  return response.data;
};

export { getComicsInfo, filterComics };