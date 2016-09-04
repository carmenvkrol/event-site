var gulp = require('gulp');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var rename = require('gulp-rename');
var transform = require('vinyl-transform');
var uglify = require('gulp-uglify');

//*** CLIENT SIDE TASKS***//

gulp.task('browserify', function() {
  var browserified = transform(function(filename) {
    var b = browserify(filename);
    return b.bundle();
  });

  return gulp.src(['./static/scripts/app.js'])
    .pipe(browserified)
    .pipe(uglify())
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./static/scripts'));
});

//*** SERVER TASKS ***//

gulp.task('runserver', function() {
    browserSync({
      notify: false,
      proxy: "127.0.0.1:5000"
    });
    var proc = exec('python ../project/app.py');
});
