"use strict";

const _          = require( 'underscore' );
const SampleData = [ { id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }, { id: 4, name: 'D' } ];


module.exports = {
    setup ( app, path ) {
        console.log( 'SampleService - setup request', path );
    }
    , find( params, callback ) {
        callback( null,  SampleData );
    }
    , get ( id, params, callback ) {
        id = Number.parseInt( id );
        let result = _.filter( SampleData, ( data ) => data.id === id );
        callback( null, result );
    }
    , create ( data, params, callback ) {
        let saved = _.clone( data );
        saved.id = 123456;

        callback( null, saved );
    }
    , update ( id, data, params, callback ) {
        let saved = _.clone( data );
        saved.id = id;
        saved.updated = true;

        callback( null, saved );
    }
    , patch ( id, data, params, callback ) {
        let saved = _.clone( data );
        saved.id = id;
        saved.patched = true;

        callback( null, saved );
    }
    , remove ( id, params, callback ) {
        callback( null, { id: id, message: 'removed' } );
    }
};