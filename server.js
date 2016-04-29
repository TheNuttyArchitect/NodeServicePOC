"use strict";

const _                   = require( 'underscore' );
const feathers            = require( 'feathers' );
const bodyParser          = require( 'body-parser' );
const session             = require( 'express-session' );
const options             = require( './config/config' );
const Services            = require( './services/Services' );

var app = feathers();

// Configure Express Application
app.use( session( options.session ) )
    .use( bodyParser.json({ limit: '50mb' }) )
    .use( bodyParser.urlencoded({
        extended: true
        , limit: '5mb'
    }) );

// Static hosting of React-UI
app.use( feathers.static( 'build' ) );

// Configurate REST Routes
app.configure( feathers.rest() )
    .use( ( req, res, next ) => {
        next();
    } )
    .use( '/sample', Services.Sample );


// Error Handling
app.use( function ( err, req, res, next ) {
    res.status( 500 ).send( err );
});

app.listen( process.env.PORT || 3001 );