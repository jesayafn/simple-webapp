const os = require('os');
const https = require('https');

const getHostname = async (request, h) => {
    const hostname = os.hostname
    const response = h.response('This node or container hostname is '+ hostname);
    return response;
};
const getDadJokes = async (request, h) => {
    const dadJokesApi = {
        hostname: 'icanhazdadjoke.com',
        method: 'GET',
        path: '/', 
        headers: {
            'Accept': 'text/plain',
        },
    }
    https.request(dadJokesApi, async (res) => {
        res.on('data', (body) =>{
            dadJokes = body;
        });
        res.end();
    }); 
    const response = h.response(dadJokes);
    return response;
};

const get = {getHostname,getDadJokes};
module.exports = {get};
