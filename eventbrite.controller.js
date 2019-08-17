require('dotenv').config()
const request = require('request-promise');
const moment = require('moment');
const key = process.env.EventBriteToken

const GetAllTechEventsFromEventBrite = async () => {
  let data
  const response = await request('https://www.eventbriteapi.com/v3/events/search/?categories=102&location.address=Auckland', {
    'auth': {
      'bearer': key
    }
  }).catch(err => console.log(err))
  const returnBody = JSON.parse(response)
  data = returnBody.events.map(element => {
    const { name, description, url } = element
    const startDate = moment(element.start.utc).format("dddd, Do MMMM YYYY");
    const startTime = moment(element.start.utc).format("hh:mm A")
    return {
      name: name.text,
      bio: description.text,
      link: url,
      date: startDate,
      time: startTime,
      site: 'EventBrite'
    }
  })
  return data
}

module.exports = {
  GetAllTechEventsFromEventBrite
}