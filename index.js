var express = require('express');
var cors = require('cors');
require('dotenv').config()
let multer = require('multer')
var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
let upload=multer({dest:'uploads'})
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse',upload.single('upfile'),(req,res)=>{
  let {originalname,mimetype,size} = req.file
  res.json({name:originalname,type:mimetype,size:size})
})

app.post('/')


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
