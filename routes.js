// Copyright (c) 2022 Bondo Pangaji
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * @author Bondo Pangaji
 */
const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Home page';
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Home page cannot be accessed with method given';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'About page cannot be accessed with method given';
        },
    },
    {
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            // Payload
            const { username, password } = request.payload;
            return `Welcome ${username}!`;
        }
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = 'default-name' } = request.params; // Path params: localhost/hello/path-params
            const { lang } = request.query; // Query params: localhost/hello/example?query-params

            // localhost/hello/example?lang=id
            if(lang === 'id') {
                return `Hai, ${name}!`;
            }

            // w/out query params (default)
            return `Hello, ${name}!`;
        }
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Page cannot be found!';
        },
    },
];

module.exports = routes;