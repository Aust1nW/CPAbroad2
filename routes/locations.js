const express = require('express');
const bodyParser = require('body-parser');
let locationController = require('../controllers/locations');

const locationRoutes = express.Router();

locationRoutes.get('/all', locationController.getAllLocations);
locationRoutes.get('/country/:country', locationController.getLocationByCountry);
//locationRoutes.delete('/remove/id/:id', locationController.removeById);
locationRoutes.get('/name/:name', locationController.getLocationByName);
locationRoutes.post('/add', locationController.addLocation);
//locationRoutes.post()*/

module.exports = locationRoutes;