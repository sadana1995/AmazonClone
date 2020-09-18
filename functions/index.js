const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { request } = require('express');

// secret key of the stripe API
const stripe = require("stripe")('sk_test_51HQeKtKoAKzWdRBGqlKzXn9PLoAagbZHp9rTKDJ8bjtbS4biDOlB5GMFIb1whBCVl679VzQiRzlU4HygemRtS0Wd00iPV29CWd')

//API

// APP config
const app = express();
//Middleware
app.use(cors({origin: true}));
app.use(express.json());
// API routes

app.get('/', (request, response) => response.status(200).send
                ('hello world'))

app.post('/payments/create', async (request, response) =>{
    const total = request.query.total;

    console.log(total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});
//Listen Command
exports.api = functions.https.onRequest(app);

