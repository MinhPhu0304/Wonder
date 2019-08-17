let Express = require('express');
const path = require('path')
let bodyParser = require('body-parser')

let port = process.env.PORT || 3000;


let app = Express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(Express.static('/'))
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(port, ()=> {
    console.log(`Server is runing on port ${port}`)
})