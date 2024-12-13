export const TOKEN_STATUS_EXPIRED = 'EXPIRED';

export const getTokenDuration = () => {
  const storedExpirationDate = localStorage.getItem('expiration');
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
};

export const getAuthToken = () => {
  const token = localStorage.getItem('token');

  if (!token) return null;

  const tokenDuration = getTokenDuration();
  if (tokenDuration < 0) return TOKEN_STATUS_EXPIRED;

  return token;
};

export const setToken = (token) => {
  localStorage.setItem('token', token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem('expiration', expiration.toISOString());
};
