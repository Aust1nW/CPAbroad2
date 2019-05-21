var express = require('express');
let locationController = require('../controllers/locations');

const locationRoutes = express.Router();

locationRoutes.get('/all', locationController.getAllLocations);
locationRoutes.get('/country=:country', locationController.getLocationByCountry);
locationRoutes.get('/continent=:continent', locationController.getLocationByContinent);
locationRoutes.get('/name=:name',locationController.getLocationByName);
locationRoutes.post()

module.exports = locationRoutes;