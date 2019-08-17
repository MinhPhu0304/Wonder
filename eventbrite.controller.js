const request = require('request')
require('dotenv').config()
const key = process.env.EventBriteToken

const GetAllTechEventsFromEventBrite = async () => {
  request('https://www.eventbriteapi.com/v3/events/search/?categories=102', {
    'auth': {
      'bearer': key
    }
  }, function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the body for tech events from eventbrite
  });
}

GetAllTechEventsFromEventBrite()

exports = {
  GetAllTechEventsFromEventBrite
}