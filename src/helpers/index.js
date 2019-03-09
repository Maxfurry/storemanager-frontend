const setToken = token => localStorage.setItem('token', token);

const getToken = localStorage.getItem('token');

const config = {
  headers: { Authorization: `beerer ${getToken}` }
};

export { setToken, getToken, config };
