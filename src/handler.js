const os = require('os');
const axios = require('axios');

const getHostname = async (request, h) => {
    const hostname = os.hostname
    const response = h.response('This node or container hostname is '+ hostname);
    return response;
};
const getDadJokes = async (request, h) => {
    const apiConfig = {
        url: 'https://icanhazdadjoke.com',
        path: '/', 
        method: 'get',
        headers: {
            'Accept': 'text/plain',
        },
    }
    const dadJokes = await axios.request(apiConfig).then(response => {
        const jokes = response.data;
        return jokes
    })
    const response = h.response(dadJokes());
    return response;
};

const get = {getHostname,getDadJokes};
module.exports = {get};
