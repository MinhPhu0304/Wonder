let Express = require('express');
let bodyParser = require('body-parser')
let port = process.env.PORT || 3000;


let app = Express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
 res.send(JSON.stringify({ Hello: 'world'}));
});


app.listen(port, ()=> {
    console.log(`Server is runing on port ${port}`)
})