const Express = require('express');
const path = require('path')
const bodyParser = require('body-parser')
require('dotenv').config()
const port = process.env.PORT || 3000;

const app = Express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(Express.static('/'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.get('/api/events',(req, res) => {

})

app.listen(port, ()=> {
    console.log(`Server is runing on port ${port}`)
})