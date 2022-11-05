// install express with `npm install express` 
const express = require('express');

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const { stageOneRequest } = require('./stages/StageOne'); 
const { stageTwoRequest } = require('./stages/StageTwo'); 

//endpoint for the hng9 stage one
app.get('/', stageOneRequest); 

//endpoint for the hng9 stage two
app.post('/send-data', stageTwoRequest); 

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`HNG9-STAGE1 listening on port ${port}`)
})

// export 'app'
module.exports = app