const https = require('https');
const fs = require('fs');
const path = require('path');



fs.readFile(path.join(__dirname, '../tokens/apiRefreshToken.txt'), 'utf-8', (err, data) => {
  if(err) throw err;
  const refreshToken = data;
  const options = {
    hostname: 'api.rakutenmarketing.com',
    path: `/token?grant_type=refresh_token&refresh_token=${refreshToken}&scope=PRODUCTION`,
    method: 'POST',
    headers: {
      'Authorization': 'Basic Sl9ISHVWR2ZrUTBJUWR4NU5VR1NtSlRJV1lFYTpndlJGd21jV2ZNa0tkX1JtRFlZS0FuWUlUZUFh',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };
  callback = function(response) {
    'use strict';
    let tokenJSON;

    //another chunk of data has been recieved, so append it to `str`
    response.on('data', function (chunk) {
      tokenJSON = JSON.parse(chunk);
    });

    response.on('error', function(err) {
      console.log(error.toString());
    });

    response.on('end', () => {
      console.log(tokenJSON)
      fs.writeFile(path.join(__dirname, '../tokens/apiReqAuthToken.txt'), `Bearer ${tokenJSON.access_token}`, (err) => {
        if(err) throw err;
      });
      fs.writeFile(path.join(__dirname, '../tokens/apiRefreshToken.txt'), tokenJSON.refresh_token, (err) => {
        if(err) throw err;
      });
    });
  };

  const req = https.request(options, callback);

  req.end();
});
