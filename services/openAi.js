require('dotenv').config()

const axios = require('axios');

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
}

async function getResponse(message){
    return await axios.post('https://api.openai.com/v1/completions', {"model": "text-davinci-002", "prompt": message, "temperature": 0}, {headers: headers}).then(response => {
        const res = response.data.choices[0].text;
        const data = res.split('=').pop();
        return parseInt(data);
    })
}

module.exports = {
    getResponse
}
