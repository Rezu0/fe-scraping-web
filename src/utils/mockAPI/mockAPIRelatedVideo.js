import { API_URL } from '../secrets.json';

export async function mockApiRelatedVideoFilter() {
  try {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    const fetchingApi = await fetch(`${API_URL}/xtape/random`, requestOptions);
    const responseData = await fetchingApi.json();

    if (responseData.status === 'fail') return { status: false, message: responseData.message };

    return responseData;
  } catch (err) {
    console.error(err);
    throw err
  }
}