var gulp = require('gulp');
var webserver = require('gulp-webserver');
 
module.exports = function (callback) {
	  let stream = gulp.src(['./'])
	    .pipe(webserver({
	      livereload: false,
	      directoryListing: true,
	      open: 'semantic-ui/examples'
	    }));
	    return stream;
}
