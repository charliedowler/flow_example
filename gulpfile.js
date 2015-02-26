var gulp = require('gulp');
var flow = require('gulp-flowtype');

gulp.task('default', function() {
  gulp.src('./*.js')
  .pipe(flow());
})
