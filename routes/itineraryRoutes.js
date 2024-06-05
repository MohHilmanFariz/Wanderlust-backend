const Hapi = require('@hapi/hapi');
const itineraryController = require('../controllers/itineraryController');
const verifyToken = require('../middleware/authMiddleware');

const routes = [
  {
    method: 'POST',
    path: '/api/itineraries',
    // options: {
    //   pre: [{ method: verifyToken }]
    // },
    handler: itineraryController.createItinerary
  },
  {
    method: 'GET',
    path: '/api/itineraries',
    options: {
      pre: [{ method: verifyToken }]
    },
    handler: itineraryController.getItineraries
  },
  {
    method: 'GET',
    path: '/api/itineraries/{id}',
    options: {
      pre: [{ method: verifyToken }]
    },
    handler: itineraryController.getItinerary
  },
  {
    method: 'PUT',
    path: '/api/itineraries/{id}',
    options: {
      pre: [{ method: verifyToken }]
    },
    handler: itineraryController.updateItinerary
  },
  {
    method: 'DELETE',
    path: '/api/itineraries/{id}',
    options: {
      pre: [{ method: verifyToken }]
    },
    handler: itineraryController.deleteItinerary
  }
];

module.exports = routes;
