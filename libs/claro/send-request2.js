var request = require('request');

module.exports.request = (field, cb) => {
    console.log('Entro en send request 2:', field);
    request({
        method: 'POST',
        url: "https://k4sales-so.kerberus.com.co/api/put",
        headers: {
            'authorization':'AAAA-BBBV-SO"',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(field)
    }, (error, response, body) => {
        cb(error, response, body)
    });
};