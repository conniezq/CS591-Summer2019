const express=require('express');
const router=express.Router();
const request=require('request');
const configs = require('../config/config.js');

const main= function() {
    return new Promise (function (resolve, reject) {
        const options = {
            method : 'GET',
            url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-10-20',
            headers: {
                'X-RapidAPI-Host': configs.host,
                'X-RapidAPI-Key': configs.key
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

router.route('/')
    .get(function(req, res, next) {
        main()
            .then(function (body) {
                let departureAirport = JSON.parse(body).Places[0].Name;
                let arrivalAirport = JSON.parse(body).Places[1].Name;
                let minPrice = JSON.parse(body).Quotes[0].MinPrice;
                let currency = JSON.parse(body).Currencies[0].Code;
                res.render('PS4', {departureAirport: departureAirport, arrivalAirport:arrivalAirport, minPrice: minPrice, currency: currency});
            })

            .catch( function (error) {
                console.log(error);
            });

    });

module.exports = router;