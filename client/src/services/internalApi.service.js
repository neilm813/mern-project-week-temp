import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:8000/api',
});

export const getAllDestinations = async () => {
  const destinations = await http.get('/destinations');
  return destinations;
};

export const getDestinationById = async (id) => {
  const destination = await http.get(`/destinations/${id}`);
  return destination;
};

export const deleteDestinationById = async (id) => {
  const destination = await http.delete(`/destinations/${id}`);
  return destination;
};
