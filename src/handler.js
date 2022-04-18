const os = require('os');
const random = require('random');


const getHostname = async (request, h) => {
    const hostname = os.hostname
    const response = h.response('This node or container hostname is '+ hostname);
    return response;
};
const getLuckyNumber = async (request, h) => {
    const luckyNumber = random.int(0,99999999999);
    const response = h.response('Your lucky number is '+ luckyNumber);
    return response;
};

const get = {getHostname,getLuckyNumber};
module.exports = {get};
