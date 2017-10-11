var gulp = require('gulp');
var webserver = require('gulp-webserver');
 
module.exports = function (callback) {
	gulp.src(['./'])
		.pipe(webserver({
			livereload: true,
			directoryListing: true,
			open: 'build/examples'
	}));
	callback();
}
