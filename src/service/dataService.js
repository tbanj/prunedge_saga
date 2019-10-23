import http from './httpService.js';

export function getUsers() {
    return fetch(`https://jsonplaceholder.typicode.com/users`)
}

export function storeUser(data) {
    return fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
}

