const Express = require('express');
const path = require('path')
const cors = require('cors');
const { GetAllTechEventsFromEventBrite } = require('./eventbrite.controller.js')
const { requestToMeetUpApi } = require('./meetup.controller.js')
const bodyParser = require('body-parser')
require('dotenv').config()
const port = process.env.PORT || 3000;

const app = Express();
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(Express.static('public'))
app.use(Express.static('/'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.get('/api/events', async (req, res) => {
    // const meetupData = await requestToMeetUpApi()
    const eventbriteData = await GetAllTechEventsFromEventBrite()
    data = [ ...eventbriteData ]
    res.json(data)
})

app.listen(port, () => {
    console.log(`Server is runing on port ${port}`)
})

