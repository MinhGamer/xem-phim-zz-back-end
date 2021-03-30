const functions = require('firebase-functions');

const app = require('express')();

const { getAllTodos } = require('./APIs/todos');

// const { loginUser } = require('./APIs/users');

app.get('/todos', getAllTodos);

// app.post('/login', loginUser);

exports.api = functions.https.onRequest(app);
