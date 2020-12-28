//get access token from token.txt file to store for tests
const fs = require('fs');
const accessToken = fs.readFileSync('./token.txt', 'utf8');
const accessToken2 = fs.readFileSync('./token2.txt', 'utf8');

module.exports = {
    baseUrl: {
        //dev
        "url": "https://kq5xvr42bi.execute-api.us-east-1.amazonaws.com/test-qa-judeshiels-dev",
        //prod
        //"url": "https://dudq8wv4c5.execute-api.us-east-1.amazonaws.com/test-qa-judeshiels-prod",
    },
    clientId: {
        //dev
        "id": "q69csigu8dnp4106sdokq0l6n",
        //prod
        //"id": "4p57q2erkqvv515r41hls93lor",

    },
    username: {
        "un": "admin@theagilemonkeys.com",
    },
    password: {
        "pw": "Admin.2020",
    },
    token: {
        "at": accessToken
    },
    token2: {
        "at2": accessToken2
    }
};