const { Locations } = require('../models');
const Sequelize = require('sequelize');

exports.getAllLocations = async(req, res) => {
    try{
        Locations.findAll().then((allLocations) =>{
            if(allLocations == null){
                res.send(404);
            }
            else{
                res.json(allLocations);
            }
        });
    }
    catch(err) {
            console.log(err);
    }
}