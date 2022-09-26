import httpRequest from '../../client';

const getComicInfo = async (value, params = '') => {
  const response = await httpRequest.get(value, {
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    params: params,
  });
  return response.data;
};

export default getComicInfo;
