const os = require("os");

const hostname = os.hostname
const getHostName = async (request, h) => {
    const response = 'This device hostname is '+ hostname;
    return response;
};
const get = {getHostName};
module.exports = {get};
