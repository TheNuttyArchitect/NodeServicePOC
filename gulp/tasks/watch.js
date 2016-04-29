var gulp = require('gulp'),
    config = require('../config'),
    browserSync = require('browser-sync');

gulp.task('watch', ['browsersync'], function () {
    //gulp.watch([config.scripts.watch], ['browserify', browserSync.reload]);
    gulp.watch([config.node.watch], ['node:restart']);
});
