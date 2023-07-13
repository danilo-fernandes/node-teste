var express = require('express');
var router = express.Router();

const https = require('https');

/* GET todo listing. */
router.get('/', function(req, res, next) {


    
const getPosts = (options) => {
    let data = '';
    
    const request = https.request(options, (response) => {
        // Set the encoding, so we don't get log to the console a bunch of gibberish binary data
        response.setEncoding('utf8');
    
        // As data starts streaming in, add each chunk to "data"
        response.on('data', (chunk) => {
        data += chunk;
        });
    
        // The whole response has been received. Print out the result.
        response.on('end', () => {
        
        console.log(data);
   
        res.send(data);
 
        });
    
    });
    
        // Log errors if any occur
        request.on('error', (error) => {
            console.error(error);
            
            res.send(error);
        });
    
        // End the request
        request.end();
        
        
    };

    const params = {
        hostname: 'localhost',
        port: 7177,
        path: '/api/TodoItems', // w
        method: 'GET',
        rejectUnauthorized: false,
        headers: {
          'Accept': 'text/plain',
        },
    }
    getPosts(params);
  });
  

  module.exports = router;