var express = require('express');
let locationController = require('../controllers/location');

const locationRoutes = express.Router();

locationRoutes.get('/all', locationController.getAllLocations);
//locationRoutes.get('/country=:country', locationController.getLocationByCountry)
//locationRoutes.get('/continent=:continent', locationController.getLocationsByContinent)

module.exports = locationRoutes;