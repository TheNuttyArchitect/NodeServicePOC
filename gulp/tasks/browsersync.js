var gulp = require( 'gulp' ),
    browserSync = require( 'browser-sync' ),
    bsConfig = require( '../config' ).browserSync,
    node = require( 'gulp-develop-server' ),
    nodeConfig = require( '../config' ).node;


gulp.task( 'browsersync', [  ], function () {
    node.listen( nodeConfig, function ( error ) {
        if ( !error ) setTimeout( function () {
            browserSync( bsConfig );
        }, 1000 );
    } );
} );

gulp.task( 'node:restart', function () {
    node.restart( function ( error ) {
        if ( !error ) setTimeout( function () {
            browserSync.reload();
        }, 1000 );
    } );
} );