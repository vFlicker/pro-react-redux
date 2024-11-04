const waitWithPossibleError = (data, timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.9) reject(new Error('An error occurred...'));
      else resolve(data);
    }, timeout);
  });
};

class ApiClient {
  async get(data) {
    return waitWithPossibleError(data, 300);
  }
}

export const apiClient = new ApiClient();
