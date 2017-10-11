var gulp = require('gulp');

module.exports = function (callback) {
	gulp.src(['semantic-ui/dist/**/*'])
		.pipe(gulp.dest('build/dist'));
	gulp.src(['semantic-ui/examples/**/*'])
		.pipe(gulp.dest('build/examples'));
	callback();
}