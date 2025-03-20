import { API_URL } from '../secrets.json';

export async function mockAPIVideos({ limit = '', page = '', tags = '', sort = '' }) {
  try {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    const fetchingApi = await fetch(`${API_URL}/xtape/videos?page=${page}&tags=${tags}&sort=${sort}&limit=${limit}`, requestOptions);
    const responseData = await fetchingApi.json();

    if (responseData.status === 'fail' || responseData.status === 'error') return { status: false, message: responseData.message };

    return responseData;
  } catch (err) {
    console.error(err);
    throw err;
  }
}