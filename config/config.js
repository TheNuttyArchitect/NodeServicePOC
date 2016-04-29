"use strict";

const session = require( 'express-session' );
const sessionSecret = process.env.SESSION_SECRET ? process.env.SESSION_SECRET : '7ae98384-3614-4066-a149-b5c56a94ec01';

module.exports = {
    clientIds: [
        {
            target: 'Target system such as SFMC, Eloqua, etc.'
            , clientId: 'Client Id provided by target'
            , clientSecret: 'Client secret for target system'
        }
    ]
    , session: {
        secret: sessionSecret
        , saveUninitialized: true
        , resave: true
    }
};
