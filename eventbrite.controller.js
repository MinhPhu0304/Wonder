require('dotenv').config()
const request = require('request-promise');
const key = process.env.EventBriteToken

const GetAllTechEventsFromEventBrite = async () => {
  let data
  const response = await request('https://www.eventbriteapi.com/v3/events/search/?categories=102', {
    'auth': {
      'bearer': key
    }
  }).catch(err => console.log(err))
  const returnBody = JSON.parse(response)
  data = returnBody.events.map(element => {
    const { name, description, url } = element
    return {
      name: name.text,
      bio: description.text,
      link: url
    }
  })
  return data
}

module.exports = {
  GetAllTechEventsFromEventBrite
}