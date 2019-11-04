const { locations } = require('../models');
const Sequelize = require('sequelize');

exports.getAllLocations = async(req, res) => {
    try{
        locations.findAll().then((allLocations) =>{
            if(allLocations == null){
                res.json(null);
            }
            else{
                res.json(allLocations);
            }
        });
    }
    catch(err) {
            console.log(err);
            res.send(404);
    }
}

exports.getLocationByName = async(req,res) => {
    try{
        locations.findOne({where: {name: req.params.name}}).then((location) =>{
            if(location == null){
                res.json(null);
            }
            else{
                res.json(location);
            }
        });
    }
    catch(err){
        console.log(err);
        res.send(404);
        

    }
}

exports.getLocationByCountry = async(req,res) => {
    try{
        locations.findAll({where: {country: req.params.country}}).then((location)=>{
            if(location == null){
                res.json(null);
            }
            else{
                res.json(location);
            }
        });
    }
    catch(err){
        res.send(404);
        console.log(err);
    }
}

exports.getLocationByContinent = async(req,res) =>{
    try{
        locations.findAll({where: {continent: req.params.continent}}).then((location)=>{
            if(location == null){
                res.json(null);
            }
            else{
                res.json(location);
            }
        });
    }
    catch(err){
        res.send(404);
        console.log(err);
    }
}

//exports.deleteLocation = async( req, res) => {
//    try {
//        locations.findById(req.params.id).then((account)) =>{
//            
  //      }
//    }
//