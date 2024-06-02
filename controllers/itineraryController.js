const Itinerary = require('../models/itinerary');
const { successResponse, errorResponse } = require('../utils/response');

exports.createItinerary = async (req, res) => {
  try {
    const { title, description, date, user } = req.body;
    const newItinerary = new Itinerary({ title, description, date, user });
    await newItinerary.save();
    successResponse(res, 201, newItinerary);
  } catch (err) {
    errorResponse(res, 500, err.message);
  }
};

exports.getItineraries = async (req, res) => {
  try {
    const itineraries = await Itinerary.find();
    successResponse(res, 200, itineraries);
  } catch (err) {
    errorResponse(res, 500, err.message);
  }
};

exports.getItinerary = async (req, res) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id);
    if (!itinerary) {
      return errorResponse(res, 404, 'Itinerary not found');
    }
    successResponse(res, 200, itinerary);
  } catch (err) {
    errorResponse(res, 500, err.message);
  }
};

exports.updateItinerary = async (req, res) => {
  try {
    const { title, description, date, user } = req.body;
    const updatedItinerary = await Itinerary.findByIdAndUpdate(
      req.params.id,
      { title, description, date, user },
      { new: true }
    );
    if (!updatedItinerary) {
      return errorResponse(res, 404, 'Itinerary not found');
    }
    successResponse(res, 200, updatedItinerary);
  } catch (err) {
    errorResponse(res, 500, err.message);
  }
};

exports.deleteItinerary = async (req, res) => {
  try {
    const deletedItinerary = await Itinerary.findByIdAndDelete(req.params.id);
    if (!deletedItinerary) {
      return errorResponse(res, 404, 'Itinerary not found');
    }
    successResponse(res, 200, 'Itinerary deleted');
  } catch (err) {
    errorResponse(res, 500, err.message);
  }
};
