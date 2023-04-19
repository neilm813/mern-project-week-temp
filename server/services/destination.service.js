const { Destination } = require('../models/destination.model');

const createDestination = async (data) => {
  const destination = await Destination.create(data);
  return destination;
};

const getAllDestinations = async () => {
  const destinations = await Destination.find();
  return destinations;
};

const getDestinationById = async (id) => {
  const destination = await Destination.findById(id);
  return destination;
};

const deleteDestinationById = async (id) => {
  const destination = await Destination.findByIdAndDelete(id);
  return destination;
};

const updateDestinationById = async (id, data) => {
  const destination = await Destination.findByIdAndUpdate(id, data, {
    // Re-run validations.
    runValidators: true,
    // Return the updated destination
    new: true,
  });

  return destination;
};

module.exports = {
  createDestination,
  getAllDestinations,
  getDestinationById,
  deleteDestinationById,
  updateDestinationById,
};
