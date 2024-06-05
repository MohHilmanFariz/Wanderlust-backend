const { db } = require('../config/firebase');
const { successResponse, errorResponse } = require('../utils/response');

exports.createItinerary = async (req, h) => {
  try {
    const { title, description, date, user } = req.payload;
    const newItinerary = { title, description, date, user };
    const docRef = await db.collection('itineraries').add(newItinerary);
    const doc = await docRef.get();
    return successResponse(h, 201, { id: docRef.id, ...doc.data() });
  } catch (err) {
    return errorResponse(h, 500, err.message);
  }
};

exports.getItineraries = async (req, h) => {
  try {
    const snapshot = await db.collection('itineraries').get();
    const itineraries = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return successResponse(h, 200, itineraries);
  } catch (err) {
    return errorResponse(h, 500, err.message);
  }
};

exports.getItinerary = async (req, h) => {
  try {
    const docRef = await db.collection('itineraries').doc(req.params.id).get();
    if (!docRef.exists) {
      return errorResponse(h, 404, 'Itinerary not found');
    }
    return successResponse(h, 200, { id: docRef.id, ...docRef.data() });
  } catch (err) {
    return errorResponse(h, 500, err.message);
  }
};

exports.updateItinerary = async (req, h) => {
  try {
    const { title, description, date, user } = req.payload;
    const updatedItinerary = { title, description, date, user };
    const docRef = db.collection('itineraries').doc(req.params.id);
    await docRef.update(updatedItinerary);
    const updatedDoc = await docRef.get();
    return successResponse(h, 200, { id: updatedDoc.id, ...updatedDoc.data() });
  } catch (err) {
    return errorResponse(h, 500, err.message);
  }
};

exports.deleteItinerary = async (req, h) => {
  try {
    const docRef = db.collection('itineraries').doc(req.params.id);
    await docRef.delete();
    return successResponse(h, 200, 'Itinerary deleted');
  } catch (err) {
    return errorResponse(h, 500, err.message);
  }
};
