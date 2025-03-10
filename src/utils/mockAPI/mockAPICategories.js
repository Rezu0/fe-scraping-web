import { API_URL } from '../secrets.json';

export async function  mockApiCategoriesFilter() {
  try {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    const fetchingApi = await fetch(`${API_URL}/xtape/categories`, requestOptions);
    const responseData = await fetchingApi.json();

    if (responseData.status === 'fail') return { status: false, message: responseData.message };

    return responseData;
  } catch (err) {
    console.error(err);
    throw err;
  }
}