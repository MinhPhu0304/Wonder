require('dotenv').config()
const request = require('request-promise');
const meetupAPI = process.env.MeetupToken
const category =  'tech'
const requestToMeetUpApi = async ()=> {
    let data
    const response = await request(`https://api.meetup.com/find/upcoming_events?&sign=true&key=${meetupAPI}&topic_category=${category}&page=20`).catch(err => console.log(err)) 
    const returnBody = JSON.parse (response)
    data = returnBody.events.map(element => {
        const { name, description, venue, local_date, local_time, link } = element
        const cleanBio = description.replace(/<[^>]*>?/gm, '');
        const address = venue ?  `${venue.address_1} ${venue.address_2}` : ``
        return {
            name,
            bio: cleanBio,
            time: `${local_date} ${local_time}`,
            link,
            address
        }
    })
    return data
}
module.exports = { 
    requestToMeetUpApi
}