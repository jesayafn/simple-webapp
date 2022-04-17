const os = require("os");
const http = require("https");

const getHostname = async (request, h) => {
    const hostname = os.hostname
    const response = h.response('This node or container hostname is '+ hostname);
    return response;
};
const getDadJokes = async (requst, h) => {
    const dadJokesApi = {
        hostname: "icanhazdadjoke.com",
        method: 'GET',
        path: '/', 
        header: {
            Accept: "text/plain",
        },
    }
    const dadJokes = http.request(dadJokesApi);
    const response = h.response(dadJokes);
    return response;
};

const get = {getHostname,getDadJokes};
module.exports = {get};
