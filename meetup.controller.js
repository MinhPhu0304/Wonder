require('dotenv').config()
const request = require('request-promise');
const moment = require('moment');
const meetupAPI = process.env.MeetupToken
const category =  'tech'
const requestToMeetUpApi = async ()=> {
    let data
    const response = await request(`https://api.meetup.com/find/upcoming_events?&sign=true&key=${meetupAPI}&topic_category=${category}&page=20`).catch(err => console.log(err)) 
    const returnBody = JSON.parse (response)
    data = returnBody.events.map(element => {
        const { name, description, venue, local_date, local_time, link } = element
        const startDate = moment(local_date).format('dddd, Do MMMM YYYY')
        const startTime = moment(local_time,[moment.ISO_8601, 'HH:mm']).format("h:mm A")
        const cleanBio = description.replace(/<[^>]*>?/gm, '');
        const address = venue ?  `${venue.address_1} ${venue.address_2 ? venue.address_2 : '' }` : ``
        return {
            name,
            bio: cleanBio,
            time: `${startTime}`,
            link,
            date: `${startDate}`,  
            address: address ? address : 'To be announced',
            site: 'Meetup'
        }
    })
    return data
}
module.exports = { 
    requestToMeetUpApi
}