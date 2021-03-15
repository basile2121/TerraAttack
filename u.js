const express = require('express')

/**
 * Import MongoClient & connexion à la DB
 */
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb+srv://robin:robline@cluster0.9y6zv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', function(err, client) {
    console.log("Connected successfully to server");
});