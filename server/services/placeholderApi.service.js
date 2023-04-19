const axios = require('axios');

const http = axios.create({
  // headers: {
  //   apiKey: 'super-secret'
  // },
  baseURL: 'https://jsonplaceholder.typicode.com',
});

const getTodoById = async (id) => {
  const todo = await http.get(`/todos/${id}`);
  return todo;
};

module.exports = {
  getTodoById,
};
