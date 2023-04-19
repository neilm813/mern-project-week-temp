const {
  createDestination,
  getAllDestinations,
  getDestinationById,
  deleteDestinationById,
  updateDestinationById,
} = require('../services/destination.service');

const handleCreateDestination = async (req, res) => {
  try {
    const destination = await createDestination(req.body);
    return res.json(destination);
  } catch (error) {
    // 400 means Bad Request (requesters fault)
    // Sending an error status code will trigger the .catch on the client side.
    // .json(error) instead of below will result in an empty object when a non-extended error is caught
    // mongoose errors work b/c they extend and fix the issue.
    return res.status(400).json({ ...error, message: error.message });
  }
};

const handleGetAllDestinations = async (req, res) => {
  try {
    const destinations = getAllDestinations();
    return res.json(destinations);
  } catch (error) {
    return res.status(400).json({ ...error, message: error.message });
  }
};

const handleGetDestinationById = async (req, res) => {
  try {
    const destination = await getDestinationById(req.params.id);
    return res.json(destination);
  } catch (error) {
    return res.status(400).json({ ...error, message: error.message });
  }
};

const handleDeleteDestinationById = async (req, res) => {
  try {
    const destination = deleteDestinationById(req.params.id);
    return res.json(destination);
  } catch (error) {
    return res.status(400).json({ ...error, message: error.message });
  }
};

const handleUpdateDestinationById = async (req, res) => {
  try {
    const destination = await updateDestinationById(req.params.id, req.params.body);

    return res.json(destination);
  } catch (error) {
    return res.status(400).json({ ...error, message: error.message });
  }
};

module.exports = {
  // long-form syntax - keyName: value
  handleCreateDestination: handleCreateDestination,
  // shorthand can be used when the key name matches the var name that is used for the value
  handleGetAllDestinations,
  handleGetDestinationById,
  handleDeleteDestinationById,
  handleUpdateDestinationById,
};
