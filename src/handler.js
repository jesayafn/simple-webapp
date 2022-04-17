const os = require('os');
const axios = require('axios');

const getHostname = async (request, h) => {
    const hostname = os.hostname
    const response = h.response('This node or container hostname is '+ hostname);
    return response;
};
const getDadJokes = async (request, h) => {
    const apiConfig = {
        baseURL: 'https://icanhazdadjoke.com',
        url: '/',
        method: 'get',
        headers: {
            'Accept': 'text/plain',
        },
    }
    const dadJokes = await axios.request(apiConfig)
    const response = h.response(dadJokes.data);
    return response;
};

const get = {getHostname,getDadJokes};
module.exports = {get};
