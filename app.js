const Express = require('express');
const path = require('path')
const cors = require('cors')
const { requestToMeetUpApi } = require('./meetup.controller.js')
const bodyParser = require('body-parser')
require('dotenv').config()
const port = process.env.PORT || 3000;

const app = Express();
app.use(cors())
app.use(bodyParser.json())
app.use(Express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.get('/api/events', async (req, res) => {
    const data = await requestToMeetUpApi()

    data = [...dataMeetup, ...eventBritedata]
    res.json(data)
    console.log(data)
})

app.listen(port, () => {
    console.log(`Server is runing on port ${port}`)
})