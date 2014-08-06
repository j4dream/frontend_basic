var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var less = require('gulp-less');

var DEST_PATH = 'Dest/';

gulp.task('copyLib', function() {
	gulp.src('bower_components/bootstrap/dist/**')
		.pipe(gulp.dest(DEST_PATH + 'lib/bootstrap/'));

	gulp.src('./bower_components/angular/angular.min.js')
		.pipe(gulp.dest(DEST_PATH + 'lib'));

	gulp.src('./bower_components/jquery/dist/jquery.min.js')
        .pipe(gulp.dest(DEST_PATH + 'lib/jquery/'));

    gulp.src('./bower_components/font-awesome/css/*')
        .pipe(gulp.dest(DEST_PATH + 'lib/font-awesome/css/'));

    gulp.src('./bower_components/font-awesome/fonts/*')
        .pipe(gulp.dest(DEST_PATH + 'lib/font-awesome/fonts/'));

    gulp.src('html/**')
        .pipe(gulp.dest(DEST_PATH + 'html'));
});


gulp.task('default', ['copyLib']);