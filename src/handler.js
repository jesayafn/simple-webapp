const os = require("os");
const https = require("https");

const getHostname = async (request, h) => {
    const hostname = os.hostname
    const response = h.response('This node or container hostname is '+ hostname);
    return response;
};
const getDadJokes = async (request, h) => {
    const dadJokesApi = {
        hostname: "icanhazdadjoke.com",
        method: 'GET',
        path: '/', 
        header: {
            Accept: "text/plain",
        },
    }
    const dadJokes = https.request(dadJokesApi, function (res) {
        res.on('data', function(body){
            return body;
        });
    });
    request.log('error', 'Event error');
    const response = h.response(dadJokes);
    return response;
};

const get = {getHostname,getDadJokes};
module.exports = {get};
