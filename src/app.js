const express = require('express')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json({limit: '5000mb'}));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req,res){
    res.send("API is working...")
})

app.listen(3000, () => console.log('Express Server listening on port 3000!'))

module.exports = {app}