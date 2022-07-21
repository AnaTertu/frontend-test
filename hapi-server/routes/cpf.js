'use strict';

var service = {},
    routes = [];
var fs = require('fs');
var path = require('path');
var cpfResponse = fs.readFileSync(path.join(__dirname, '../data/cpf.json'));

service = {
    getCPF: {
        description: 'CPF',
        handler: function (req, h) {
            const cpf = req.params.cpf;
            if (cpf === '123.456.789.12') {
                return h.response({}).code(404);
            }
            return h.response(cpfResponse).code(200);
        }
    }
}

routes = [
    {
        path: '/api/cpf',
        method: 'POST',
        config: service.getCPF
    }
];

module.exports.routes = routes;
