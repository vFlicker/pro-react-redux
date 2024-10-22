const API_URL = 'http://localhost:3000';

const defaultConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'GET',
};

const sendHttpRequest = async (url, config = defaultConfig) => {
  const response = await fetch(url, config);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(
      resData.message || 'Something went wrong, failed to send request.',
    );
  }

  return resData;
};

export const fetchAllMeals = async () => {
  return sendHttpRequest(`${API_URL}/meals`);
};

export const createOrder = async (order) => {
  return sendHttpRequest(`${API_URL}/orders`, {
    ...defaultConfig,
    method: 'POST',
    body: JSON.stringify(order),
  });
};
