const os = require("os");

const hostname = os.hostname
const getHostName = async (request, h) => {
    const response = h.response({
    status: 'success',
    message: 'This device hostname is '+ hostname
    });
    response.code(200);
    return response;
};
const get = {getHostName};
module.exports = {get};
