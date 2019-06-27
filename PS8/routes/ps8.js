const express = require('express');
const router = express.Router();
const request = require('request');
const db = require('../mongo/mongo');
const configs = require('../../PS8/configs/config.json');


/* Basically this app could help find the minimal price of the flight from
   Logan airport to any another airport on a certain date, then we call the second api
   to find the information of the arrival airport
 */

db.connect((err, client) => {
    if (err) {
        console.log(`ERR: ${err}`);
    } else {
        console.log(`Connected`);
    }
});

router.get('/:airportCode', function(req, res, next) {
    let mongo = db.getDB();
    mongo.collection('priceInfo').findOne({airportCode: req.params.airportCode}, {
            fields: {
                _id: 0,
                airportCode: '',
            }
        },
        function (err, priceObject) {
            if (err) {
                console.log(err);
            } else if (priceObject != null) {
                res.send({...priceObject, cached: true});
            } else {
                getPrice(req.params.arrivalCode)
                    .then(function (response) {
                        let {arrivalAirport, minPrice, ...priceObject} = {
                             arrivalAirport : JSON.parse(response).Places[1].IataCode,
                             minPrice : JSON.parse(response).Quotes[0].MinPrice,
                             currency : JSON.parse(response).Currencies[0].Code,
                             website : ""
                        };
                        res.send(priceObject);

                        let secondApi_options = {
                            method : 'GET',
                            url: `https://airport-info.p.rapidapi.com/airport?iata=${priceObject.arrivalAirport}`,
                            headers: {
                                'X-RapidAPI-Host': configs.aiportHost,
                                'X-RapidAPI-Key': configs.airportkey
                            }
                        };
                        request(secondApi_options)
                            .then(function (response) {
                                response = JSON.parse(response)
                                priceObject.website = response.website;

                                mongo.collection('priceInfo').insertOne({arrivalAirport, minPrice, ...priceObject},
                                    function (err, result) {
                                        if (err) {
                                            console.log(err);
                                        } else {
                                            res.send({...priceObject, cached: false});
                                        }
                                    })
                            })

                            .catch(function (err) {
                                console.log("Error: ", err);
                            })
                    })
                    .catch(function (err) {
                        console.log("Error: ", err);
                    });
            }
        });
});

const getPrice= function(airportCode) {
    return new Promise (function (resolve, reject) {
        const options = {
            method : 'GET',
            url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/BOS-sky/${airportCode}-sky/2019-10-20`,
            headers: {
                'X-RapidAPI-Host': configs.skyScannerHost,
                'X-RapidAPI-Key': configs.skyScannerkey
            }
        };

        request.get(options, function (err, res, body) {
            if (err)
                reject(new Error(err));
            else {
                resolve(body)
            }
        });
    });
};


